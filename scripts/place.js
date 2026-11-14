// Static weather values (metric)
const temperature = 5; // °C
const windSpeed = 10; // km/h

/**
 * Calculate wind chill using the Environment Canada / NWS metric formula.
 * One-line return of the calculation.
 * @param {number} temp - Temperature in °C
 * @param {number} wind - Wind speed in km/h
 * @returns {number} Wind chill in °C
 */
function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

// Display wind chill only when conditions are met
function displayWindChill() {
    const windChillElement = document.getElementById("windchill");
    // Viable only if temp <= 10 °C and wind > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        const chill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${chill.toFixed(1)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

// Footer: current year and last modified
function setFooterDates() {
    const yearSpan = document.getElementById("current-year");
    const modifiedSpan = document.getElementById("last-modified");

    yearSpan.textContent = new Date().getFullYear();

    // Format last modified date nicely
    const lastMod = new Date(document.lastModified);
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    };
    modifiedSpan.textContent = lastMod.toLocaleString("en-GB", options).replace(",", "");
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
    displayWindChill();
    setFooterDates();
});