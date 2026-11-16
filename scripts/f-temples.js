
/* ==============================
   TEMPLE ALBUM - WDD 131
   Osagie Ohenhen
================================= */


/* ==============================
   TEMPLE DATA
================================= */

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Idaho Falls Idaho",
        location: "Idaho Falls, Idaho",
        dedicated: "1945, September, 25",
        area: 85624,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-1903.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-70487.jpg"
    },
    {
        templeName: "Melbourne Australia",
        location: "Melbourne, Australia",
        dedicated: "2000, June, 16",
        area: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/melbourne-australia-temple/melbourne-australia-temple-58608.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1958, August, 25",
        area: 19184,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-43596.jpg"
    },
    {
        templeName: "Los Angeles California",
        location: "Los Angeles, California, United States",
        dedicated: "1956, March, 14",
        area: 190614,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-67748.jpg"
    }
];


/* ==============================
   SELECT HTML ELEMENTS
================================= */

const templeContainer = document.querySelector(".temple-grid");
const navLinks = document.querySelectorAll(".navigation a");

const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");


/* ==============================
   HAMBURGER MENU
================================= */

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    menuButton.textContent =
        menuButton.classList.contains("open") ? "✕" : "☰";

});


/* ==============================
   DISPLAY TEMPLES
================================= */

function displayTemples(templeList) {

    // Clear previous temple cards
    templeContainer.innerHTML = "";

    // Loop through the temple array
    templeList.forEach((temple) => {

        // Create temple card
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        // Temple name
        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        // Temple location
        const location = document.createElement("p");
        location.innerHTML =
            `<strong>Location:</strong> ${temple.location}`;

        // Dedication date
        const dedicated = document.createElement("p");
        dedicated.innerHTML =
            `<strong>Dedicated:</strong> ${temple.dedicated}`;

        // Temple area
        const area = document.createElement("p");
        area.innerHTML =
            `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        // Temple image
        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";

        // Append elements to temple card
        templeCard.appendChild(name);
        templeCard.appendChild(location);
        templeCard.appendChild(dedicated);
        templeCard.appendChild(area);
        templeCard.appendChild(image);

        // Append temple card to gallery
        templeContainer.appendChild(templeCard);

    });

}


/* ==============================
   FILTER TEMPLES
================================= */

function filterTemples(filter) {

    let filteredTemples = [];

    switch (filter) {

        // Show temples dedicated before 1900
        case "old":
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.split(",")[0]);
                return year < 1900;
            });
            break;

        // Show temples dedicated after 2000
        case "new":
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.split(",")[0]);
                return year > 2000;
            });
            break;

        // Show temples larger than 90,000 sq ft
        case "large":
            filteredTemples = temples.filter((temple) => {
                return temple.area > 90000;
            });
            break;

        // Show temples smaller than 10,000 sq ft
        case "small":
            filteredTemples = temples.filter((temple) => {
                return temple.area < 10000;
            });
            break;

        // Show all temples
        case "all":
        default:
            filteredTemples = temples;
            break;

    }

    // Display filtered results
    displayTemples(filteredTemples);

}


/* ==============================
   NAVIGATION EVENT LISTENERS
================================= */

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        // Prevent page from reloading
        event.preventDefault();

        // Get selected filter
        const filter = link.dataset.filter;

        // Display selected temples
        filterTemples(filter);

        // Remove active class from all links
        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });

        // Highlight selected link
        link.classList.add("active");

        // Close mobile navigation
        navigation.classList.remove("open");
        menuButton.classList.remove("open");
        menuButton.textContent = "☰";

    });

});


/* ==============================
   DISPLAY ALL TEMPLES ON PAGE LOAD
================================= */

displayTemples(temples);
