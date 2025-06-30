function updateAlternateRebuttalAmounts(securityPhrase) {
  let level3 = 65;
  let level4 = 55;

  const previousAmount = getPreviousDonationAmount(securityPhrase);

  if (previousAmount >= 65) {
    level3 = roundToNearestFive(previousAmount * 1.2); // 20% higher, rounded
    level4 = previousAmount; // Same as last year
  }

  document.querySelectorAll('.rebuttal-level3').forEach(el => {
    el.textContent = `$${formatCurrency(level3)}`;
  });

  document.querySelectorAll('.rebuttal-level4').forEach(el => {
    el.textContent = `$${formatCurrency(level4)}`;
  });
}

function generateAlternateRebuttalTiers(securityPhrase) {
  const container = document.getElementById('alternateRebuttalTiers');
  if (!container) return;

  const previousAmount = getPreviousDonationAmount(securityPhrase);
  if (previousAmount < 65) {
    container.textContent = ''; // Hide if not applicable
    return;
  }

  const tiers = [];
  let current = Math.round(previousAmount * 1.2);

  while (current >= AMOUNTS.minimum) {
    tiers.push(`$${formatCurrency(current)}`);
    current = Math.floor(current * 0.8); // reduce by 20%
  }

  container.innerHTML = `IF NEEDED, ALTERNATE FALLBACKS: ${tiers.join(', ')}`;
}
