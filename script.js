const baseURL = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies";

let bodies;

// API
async function fetchBaseURL() {
    try {
        let response = await fetch(baseURL, {
            method: "GET",
            headers: {
                "x-zocom": "solaris-edVCa1E6zDZRztaq",
            },
        });
        let data = await response.json();
        bodies = data;
        bodies = bodies.bodies;

        // ÄNDRAR DET ANVÄNDAREN SKRIVER TILL SMÅ BOKSTÄVER
        let planetIndex;
        if (planetName) {
            planetIndex = bodies.findIndex(
                (body) => body.name.toLowerCase() === planetName.toLowerCase()
            );
        }
        displayPlanetInfo(planetIndex);

        // FELHANTERING
    } catch (error) {
        console.error("Error fetching data:", error);
        if (error !== null && error !== undefined) {
            console.log(error.message);
        } else {
            console.log("An unknown error occurred.");
        }
    }
}

// INFORMATION SOM VISAS OM VARJE PLANET
function displayPlanetInfo(i) {
    if (i < bodies.length) {
        document.getElementById("planet_heading").innerHTML = bodies[i].name;
        document.getElementById("planet_latin").innerHTML = bodies[i].latinName;
        document.getElementById("planet_description").innerHTML = bodies[i].desc;
        document.getElementById("planet_circumference").innerHTML =
            bodies[i].circumference.toLocaleString() + " km";
        document.getElementById("planet_distance").innerHTML =
            bodies[i].distance.toLocaleString() + " km";
        document.getElementById("planet_temp_day").innerHTML =
            bodies[i].temp.day.toLocaleString() + "°C";
        document.getElementById("planet_temp_night").innerHTML =
            bodies[i].temp.night.toLocaleString() + "°C";
        if (bodies[i].moons == 0) {
            document.getElementById("planet_moons").innerHTML = "Har inga månar";
        } else {
            document.getElementById("planet_moons").innerHTML =
                bodies[i].moons.join(", ");
        }
    }
}

// SÖKRUTA
let searchForm = document.getElementById("search-form");
let searchBox = document.getElementById("search-box");
document.addEventListener("DOMContentLoaded", function () {
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        searchPlanets();
    });
});

// KLICKABARA PLANETER
let planets = document.querySelectorAll('section');
planets.forEach(planet => {
    planet.addEventListener('click', (event) => {
        let planetName = event.target.id;
        window.location.href = `/planet.html?name=${planetName}`;
    });
});

// SÖKER BLAND PLANETER SOM ANVÄNDAREN HAR SKRIVIT IN
function searchPlanets() {
    let search = searchBox.value.toLowerCase();
    for (let i = 0; i < bodies.length; i++) {
        let planetName = bodies[i].name.toLowerCase();
        if (planetName === search) {
            window.location.href = `/planet.html?name=${planetName}`;
        }
    }
}

// ÄNDRAR URL:EN PÅ HEMSIDAN BEROENDE PÅ VILKEN PLANET MAN LÄSER OM
let urlParams = new URLSearchParams(window.location.search);
let planetName = urlParams.get("name");

fetchBaseURL(planetName);

// KLOTETS FÄRG I VARJE PLANETSIDA
function changeBackgroundColor() {
    let planet = document.getElementById("planet");
    if (planetName == "solen") {
        planet.style.backgroundColor = "#ffd029";
    } if (planetName == "merkurius") {
        planet.style.backgroundColor = "#888888";
    } if (planetName == "venus") {
        planet.style.backgroundColor = "#e7cdcd";
    } if (planetName == "jorden") {
        planet.style.backgroundColor = "#428ed4";
    } if (planetName == "mars") {
        planet.style.backgroundColor = "#ef5f5f";
    } if (planetName == "jupiter") {
        planet.style.backgroundColor = "#e29468";
    } if (planetName == "saturnus") {
        planet.style.backgroundColor = "#c7aa72";
    } if (planetName == "uranus") {
        planet.style.backgroundColor = "#c9d4f1";
    } if (planetName == "neptunus") {
        planet.style.backgroundColor = "#7a91a7";
    }
}
changeBackgroundColor()

// TILLBAKA KNAPP
const button = document.getElementById("returnButton");
button.addEventListener('click', function () {
    window.history.back();
});

