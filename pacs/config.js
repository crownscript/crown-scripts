const CONFIG = {
    seasonalMessage: "YEARLY DRIVE",  // Change this as needed

    donationLevels: {
        gold: 105,
        silver: 95,
        bronze: 75,
        rebuttal1: 45,
        rebuttal2: 34,
        minimum: 25
    }
};

// Function to get the seasonal message dynamically
function getSeasonalMessage() {
    return CONFIG.seasonalMessage;
}

// Function to get donation levels
function getDonationLevels() {
    return CONFIG.donationLevels;
}
