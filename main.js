document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const firstName = urlParams.get('first_name') || 'Loading...';
  const lastName = urlParams.get('last_name') || 'Loading...';
  const securityPhrase = urlParams.get('security_phrase') || 'Loading...';

  document.getElementById('first_name').textContent = firstName;
  document.getElementById('last_name').textContent = lastName;
  document.getElementById('security_phrase_display').textContent = securityPhrase;

  // ✅ Now call the function that calculates and updates amounts
  applyAmountsToDOM(securityPhrase);

  // Optional: also refresh seasonal message
  document.getElementById("seasonal-message").textContent = getSeasonalMessage();

  generateRebuttalTiers(securityPhrase);

});
