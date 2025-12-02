document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const firstName = urlParams.get('first_name') || 'Loading...';
  const lastName = urlParams.get('last_name') || 'Loading...';
  const securityPhrase = urlParams.get('security_phrase') || 'Loading...';
  const city = urlParams.get('city') || 'Loading...';

  // Update all text fields
  document.getElementById('first_name').textContent = firstName;
  document.getElementById('last_name').textContent = lastName;
  document.getElementById('city').textContent = city;
  
  // Update security phrase in all locations (ID and class)
  document.getElementById('security_phrase_display').textContent = securityPhrase;
  document.querySelectorAll('.security-phrase-display').forEach(el => {
    el.textContent = securityPhrase;
  });

  // Call standard rebuttal updates
  applyAmountsToDOM(securityPhrase);
  generateRebuttalTiers(securityPhrase);

  // Optional: refresh seasonal message
  document.getElementById("seasonal-message").textContent = getSeasonalMessage();

  // Dynamically resize iframe based on screen height
  function resizeIframe() {
    const iframe = document.getElementById("popupFrame");
    if (iframe) {
      console.log("✅ Resizing iframe...");
      const screenHeight = window.innerHeight;
      const calculatedHeight = Math.min(Math.max(screenHeight * 0.7, 400), 900);
      iframe.setAttribute("height", "1200"); // Force height for Vicidial
    } else {
      console.warn("❌ iframe not found");
    }
  }

  resizeIframe(); // Run on page load
  window.addEventListener("resize", resizeIframe); // Run on window resize

  // Fallback in case iframe is injected late (common in Vicidial)
  window.addEventListener("load", function () {
    setTimeout(resizeIframe, 1000); // Try again after 1 second
  });
});