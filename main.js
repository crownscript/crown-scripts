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

  // ✅ Dynamically resize iframe based on screen height
  function resizeIframe() {
    const iframe = document.getElementById("popupFrame");
    if (iframe) {
      const screenHeight = window.innerHeight;
      const calculatedHeight = Math.min(Math.max(screenHeight * 0.7, 400), 900);
      iframe.style.height = `1200px`;
    }
  }

  resizeIframe(); // Run on page load
  window.addEventListener("resize", resizeIframe); // Run on screen resize
});
