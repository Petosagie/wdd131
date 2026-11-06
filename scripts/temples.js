// Hamburger menu toggle
const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    // Change icon between ☰ and ✕
    menuButton.textContent = menuButton.classList.contains("open") ? "✕" : "☰";
});