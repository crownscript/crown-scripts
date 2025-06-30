document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const firstName = urlParams.get('first_name') || 'Loading...';
  const lastName = urlParams.get('last_name') || 'Loading...';
  const securityPhrase = urlParams.get('security_phrase') || 'Loading...';
  const city = urlParams.get('city') || 'Loading...';

  document.getElementById('first_name').textContent = firstName;
  document.getElementById('last_name').textContent = lastName;
  document.getElementById('security_phrase_display').textContent = securityPhrase;
  document.getElementById('city').textContent = city;

  // ✅ Call standard rebuttal updates
  applyAmountsToDOM(securityPhrase);
  generateRebuttalTiers(securityPhrase);

  // ✅ Call alternate rebuttal updates
  updateAlternateRebuttalAmounts(securityPhrase);
  generateAlternateRebuttalTiers(securityPhrase);

  // Optional: refresh seasonal message
  document.getElementById("seasonal-message").textContent = getSeasonalMessage();
});
