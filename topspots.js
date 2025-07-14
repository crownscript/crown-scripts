function roundToNearest5(num) {
  return Math.round(num / 5) * 5;
}

function formatCurrency(num) {
  return num.toLocaleString('en-US');
}

function getPreviousDonationAmount(securityPhrase) {
  // Extract the first number (integer or decimal) from the string
  const numberMatch = securityPhrase.match(/(\d+\.\d+|\d+)/);
  if (!numberMatch) return AMOUNTS.minimum;
  
  // Convert to float and round down to nearest whole number
  const amount = parseFloat(numberMatch[0]);
  return isNaN(amount) ? AMOUNTS.minimum : Math.floor(amount);
}

function calculateDonationTiers(baseAmount) {
  const bronze = roundToNearest5(baseAmount * 2);
  const silver = roundToNearest5(baseAmount * 2.5);
  const gold = roundToNearest5(baseAmount * 3);
  return { bronze, silver, gold };
}

function applyAmountsToDOM(securityPhrase) {
  const previousAmount = getPreviousDonationAmount(securityPhrase);
  const bronzeEl = document.getElementById('bronzeAmount');
  const silverEl = document.getElementById('silverAmount');
  const goldEl = document.getElementById('goldAmount');

  let bronze, silver, gold;

  if (previousAmount >= 50) {
    try {
      ({ bronze, silver, gold } = calculateDonationTiers(previousAmount));
    } catch {
      ({ bronze, silver, gold } = AMOUNTS.topLevels);
    }
  } else {
    ({ bronze, silver, gold } = AMOUNTS.topLevels);
  }

  bronzeEl.textContent = formatCurrency(bronze);
  silverEl.textContent = formatCurrency(silver);
  goldEl.textContent = formatCurrency(gold);
}
