//import { fetchBaseURL } from "./module/api.js";

const baseURL = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';

let bodies;

// fetch API
async function fetchBaseURL() {
    try {
        let response = await fetch(baseURL, {
            method: 'GET',
            headers: {
                'x-zocom':
                    'solaris-edVCa1E6zDZRztaq'
            },
        });
        let data = await response.json();
        bodies = data;
        bodies = bodies.bodies;

        displayEarthInfo();

    } catch (error) {
        console.error('Error fetching data:', error);
        if (error !== null && error !== undefined) {
            console.log(error.message);
        } else {
            console.log("An unknown error occurred.");
        }
    }
}
fetchBaseURL();

function displayEarthInfo(i) {
    document.getElementById("earth_heading").innerHTML = bodies[i].name;
    document.getElementById("earth_latin").innerHTML = bodies[i].latinName;
    document.getElementById("earth_description").innerHTML = bodies[i].desc;
    document.getElementById("earth_circumference").innerHTML = bodies[i].circumference.toLocaleString() + " km";
    document.getElementById("earth_distance").innerHTML = bodies[i].distance.toLocaleString() + " km";
    document.getElementById("earth_temp_day").innerHTML = bodies[i].temp.day + "C";
    document.getElementById("earth_temp_night").innerHTML = bodies[i].temp.night + "C";
    document.getElementById("earth_moons").innerHTML = bodies[i].moons;
}

// Sökruta 
let searchForm = document.getElementById("search-form");
let searchBox = document.getElementById("search-box");
document.addEventListener("DOMContentLoaded", function () {
    searchForm.addEventListener("submit", (event) => {
        console.log(searchBox.value);
        event.preventDefault();
        searchPlanets();
    })
});

function searchPlanets() {
    let search = searchBox.value.toLowerCase();
    for (let i = 0; i < bodies.length; i++) {
        let planetName = bodies[i].name.toLowerCase();
        if (planetName === search) {
            displayEarthInfo(i);
            //goToPlanetPage(bodies[i].name);
            return;
        }
    }
}

function goToPlanetPage() {
    fetchBaseURL();
    //window.location.href = `/${planetName.toLowerCase()}.html`;
}




/*
// Change Pages funkar!!
document.addEventListener("DOMContentLoaded", function () {
    let earthElement = document.getElementById("earth");
    if (earthElement) {
        earthElement.addEventListener("click", earthPage);
    }
});

// Earth page
function earthPage() {
    fetchBaseURL();
    window.location.href = "/jorden.html";
}
*/
// Change Pages
/*document.getElementById("sun").addEventListener("click", sunPage);
function sunPage() {
    window.location.href = "";
}
document.getElementById("mercury").addEventListener("click", mercuryPage);
function mercuryPage() {
    window.location.href = "";
}
document.getElementById("venus").addEventListener("click", venusPage);
function venusPage() {
    window.location.href = "";
}
document.getElementById("earth").addEventListener("click", earthPage);
function earthPage() {
    window.location.href = "/earth.html";
}
document.getElementById("mars").addEventListener("click", marsPage);
function marsPage() {
    window.location.href = "";
}
document.getElementById("jupiter").addEventListener("click", jupiterPage);
function jupiterPage() {
    window.location.href = "";
}
document.getElementById("saturn").addEventListener("click", saturnPage);
function saturnPage() {
    window.location.href = "";
}
document.getElementById("uranus").addEventListener("click", uranusPage);
function uranusPage() {
    window.location.href = "";
}
document.getElementById("neptune").addEventListener("click", neptunePage);
function neptunePage() {
    window.location.href = "";
}*/





