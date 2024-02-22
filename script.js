//import { fetchBaseURL } from "./module/api.js";
//fetchBaseURL();

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

        function displayEarth() {
            document.getElementById("earth_heading").innerHTML = bodies[3].name;
            document.getElementById("earth_latin").innerHTML = bodies[3].latinName;
            document.getElementById("earth_description").innerHTML = bodies[3].desc;
            document.getElementById("earth_circumference").innerHTML = bodies[3].circumference.toLocaleString() + " km";
            document.getElementById("earth_distance").innerHTML = bodies[3].distance.toLocaleString() + " km";
            document.getElementById("earth_temp_day").innerHTML = bodies[3].temp.day + "C";
            document.getElementById("earth_temp_night").innerHTML = bodies[3].temp.night + "C";
            document.getElementById("earth_moons").innerHTML = bodies[3].moons;
        }
        displayEarth();

        /*
        console.log(bodies);
        console.log(bodies[0].name);
        console.log(bodies[0].latinName);
        console.log(bodies[0].desc);
        console.log(bodies[0].circumference);
        console.log(bodies[0].distance);
        console.log(bodies[0].temp.day);
        console.log(bodies[0].temp.night);
        console.log(bodies[0].moons);*/

    } catch (error) {
        console.error("Error: ", error);
    }
}
fetchBaseURL();

// Change Pages funkar!!
document.addEventListener("DOMContentLoaded", function () {
    let earthElement = document.getElementById("earth");
    if (earthElement) {
        earthElement.addEventListener("click", earthPage);
    }
});

// Earth page
function earthPage() {
    window.location.href = "/earth.html";
}


// Sökruta 
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    searchPlanets();
});




function searchPlanets() {
    search = searchBox.value;
    if (search == bodies[3].name) {
        earthPage();
    } if (search) {

    } else {

    }

}



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
}*/

// document.getElementById("earth").addEventListener("click", earthPage);
// function earthPage() {
//   window.location.href = "/earth.html";
// }

/*document.getElementById("mars").addEventListener("click", marsPage);
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





