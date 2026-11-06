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

// Hamburger menu toggle
const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    // Change icon between ☰ and ✕
    menuButton.textContent = menuButton.classList.contains("open") ? "✕" : "☰";
});