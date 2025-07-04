// rebutals.js

function formatCurrency(amount) {
  return parseInt(amount).toFixed(0);
}

function getPreviousDonationAmount(securityPhrase) {
  const parsed = parseInt(securityPhrase.replace(/\D/g, ''));
  return isNaN(parsed) ? 0 : parsed;
}

function roundToNearestFive(amount) {
  return Math.round(amount / 5) * 5;
}

function updateRebuttalAmounts(securityPhrase) {
  let level1 = AMOUNTS.rebuttals.level1;
  let level2 = AMOUNTS.rebuttals.level2;
  let level3 = AMOUNTS.rebuttals.level3 || AMOUNTS.minimum;
  let minimumAmount = AMOUNTS.minimum;

  const previousAmount = getPreviousDonationAmount(securityPhrase);

  if (previousAmount >= 50) {
    level1 = roundToNearestFive(previousAmount);
    level2 = roundToNearestFive(previousAmount * 0.8);
    level3 = roundToNearestFive(previousAmount * 0.6);
    minimumAmount = roundToNearestFive(previousAmount * 0.5);

    if (level2 < AMOUNTS.minimum) level2 = AMOUNTS.minimum;
    if (level3 < AMOUNTS.minimum) level3 = AMOUNTS.minimum;
    if (minimumAmount < AMOUNTS.minimum) minimumAmount = AMOUNTS.minimum;
  }

  // Update all rebuttal amounts
  document.querySelectorAll('.rebuttal-level1').forEach(el => {
    el.textContent = `$${formatCurrency(level1)}`;
  });

  document.querySelectorAll('.rebuttal-level2').forEach(el => {
    el.textContent = `$${formatCurrency(level2)}`;
  });

  document.querySelectorAll('.rebuttal-level3').forEach(el => {
    el.textContent = `$${formatCurrency(level3)}`;
  });

  document.querySelectorAll('.rebuttal-minimum').forEach(el => {
    el.textContent = `$${formatCurrency(minimumAmount)}`;
  });
}

function generateRebuttalTiers(securityPhrase) {
  const container = document.getElementById('rebuttalTiers');
  if (!container) return;

  const previousAmount = getPreviousDonationAmount(securityPhrase);
  if (previousAmount < 50) {
    container.textContent = ''; // Hide if not applicable
    return;
  }

  const tiers = [];
  let current = previousAmount;

  while (current >= AMOUNTS.minimum) {
    tiers.push(`$${formatCurrency(current)}`);
    current = Math.floor(current * 0.8); // reduce by 20%
  }

  container.innerHTML = `IF NEEDED, FALLBACK AMOUNTS: ${tiers.join(', ')}`;
}

// On page load, run updates
document.addEventListener("DOMContentLoaded", function () {
  const securityPhrase = document.getElementById("security_phrase_display")?.textContent || '0';
  updateRebuttalAmounts(securityPhrase);
  generateRebuttalTiers(securityPhrase);
});