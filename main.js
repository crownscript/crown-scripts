document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const firstName = urlParams.get('first_name') || 'Loading...';
  const lastName = urlParams.get('last_name') || 'Loading...';
  const securityPhrase = urlParams.get('security_phrase') || 'Loading...';
  const city = urlParams.get('city') || 'Loading...';
  const address = urlParams.get('address') || 'Loading...';

  // Update all text fields
  const firstNameEl = document.getElementById('first_name');
  if (firstNameEl) firstNameEl.textContent = firstName;

  const lastNameEl = document.getElementById('last_name');
  if (lastNameEl) lastNameEl.textContent = lastName;

  const cityEl = document.getElementById('city');
  if (cityEl) cityEl.textContent = city;

  const securityPhraseDisplay = document.getElementById('security_phrase_display');
  if (securityPhraseDisplay) securityPhraseDisplay.textContent = securityPhrase;

  const addressEl = document.getElementById('address');
  if (addressEl) addressEl.textContent = address;

  document.querySelectorAll('.security-phrase-display').forEach(el => {
    el.textContent = securityPhrase;
  });

// ---- Amounts & rebuttal tiers (guarded) ----
if (typeof applyAmountsToDOM === "function") {
  try {
    applyAmountsToDOM(securityPhrase);
  } catch (e) {
    console.error("Error in applyAmountsToDOM:", e);
  }
}

if (typeof generateRebuttalTiers === "function") {
  try {
    generateRebuttalTiers(securityPhrase);
  } catch (e) {
    console.error("Error in generateRebuttalTiers:", e);
  }
}

// ---- Seasonal message (safe) ----
const seasonalMessageEl = document.getElementById("seasonal-message");
if (seasonalMessageEl && typeof getSeasonalMessage === "function") {
  seasonalMessageEl.textContent = getSeasonalMessage();
}


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