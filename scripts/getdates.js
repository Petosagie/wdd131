// Dynamically set the current year in the footer
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Dynamically set the last modified date
const lastMod = document.getElementById("lastModified");
if (lastMod) {
    lastMod.textContent = `Last Modification: ${document.lastModified}`;
}