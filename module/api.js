const baseURL =
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies";

let bodies;

// fetch API
async function fetchBaseURL(planetName) {
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

        let planetIndex;
        if (planetName) {
            planetIndex = bodies.findIndex(
                (body) => body.name.toLowerCase() === planetName.toLowerCase()
            );
        } else {
            console.error("Ingen planet specificerad!");
        }

        displayPlanetInfo(planetIndex);
    } catch (error) {
        console.error("Error fetching data:", error);
        if (error !== null && error !== undefined) {
            console.log(error.message);
        } else {
            console.log("An unknown error occurred.");
        }
    }
}

function displayPlanetInfo(i) {
    document.getElementById("planet_heading").innerHTML = bodies[i].name;
    document.getElementById("planet_latin").innerHTML = bodies[i].latinName;
    document.getElementById("planet_description").innerHTML = bodies[i].desc;
    document.getElementById("planet_circumference").innerHTML =
        bodies[i].circumference.toLocaleString() + " km";
    document.getElementById("planet_distance").innerHTML =
        bodies[i].distance.toLocaleString() + " km";
    document.getElementById("planet_temp_day").innerHTML =
        bodies[i].temp.day + "C";
    document.getElementById("planet_temp_night").innerHTML =
        bodies[i].temp.night + "C";
    if (bodies[i].moons == 0) {
        document.getElementById("planet_moons").innerHTML = "Har inga månar";
    } else {
        document.getElementById("planet_moons").innerHTML =
            bodies[i].moons.join(", ");
    }
}

// Sökruta
let searchForm = document.getElementById("search-form");
let searchBox = document.getElementById("search-box");
document.addEventListener("DOMContentLoaded", function () {
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        searchPlanets();
    });
});

function searchPlanets() {
    let search = searchBox.value.toLowerCase();
    for (let i = 0; i < bodies.length; i++) {
        let planetName = bodies[i].name.toLowerCase();
        if (planetName === search) {
            window.location.href = `/planet.html?name=${planetName}`;
        }
    }
}

let urlParams = new URLSearchParams(window.location.search);
let planetName = urlParams.get("name");

fetchBaseURL(planetName);

export { fetchBaseURL, displayPlanetInfo, searchPlanets }