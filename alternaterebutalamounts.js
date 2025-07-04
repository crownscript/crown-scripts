function getPreviousDonationAmount(securityPhrase) {
  const parsed = parseInt(securityPhrase.replace(/\D/g, ''));
  return isNaN(parsed) ? 0 : parsed;
}

function roundToNearestFive(amount) {
  return Math.round(amount / 5) * 5;
}

function setDynamicMinimum(securityPhrase) {
  const previousAmount = getPreviousDonationAmount(securityPhrase);

  if (previousAmount >= 50) {
    const halfAmount = roundToNearestFive(previousAmount / 2);
    AMOUNTS.minimum = halfAmount;

    // Update any elements using .rebuttal-minimum
    document.querySelectorAll('.rebuttal-minimum').forEach(el => {
      el.textContent = `$${halfAmount}`;
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const securityPhrase = document.getElementById("security_phrase_display")?.textContent || '0';
  setDynamicMinimum(securityPhrase);
});
