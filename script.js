import { fetchBaseURL } from "./module/api.js";
fetchBaseURL();

/*const baseURL = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';

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
        console.log(bodies);

    } catch (error) {
        console.error("Error: ", error);
    }
}
fetchBaseURL();*/

// Change Pages funkar!!
document.addEventListener("DOMContentLoaded", function () {
    let earthElement = document.getElementById("earth");
    if (earthElement) {
        earthElement.addEventListener("click", earthPage);
    }
});

function earthPage() {
    window.location.href = "/earth.html";
}


/*
const displayEarth = async () => {
    const payload = await fetchBaseURL();

    let dataName = payload.map((bodies) => {
        const { name } = bodies;

        return `
        <h1>${bodies[0].name}</h1>
        `
    }) 
    display.innerHTML = dataName;
}
displayEarth();*/






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




//document.getElementById("earth_heading").innerHTML = "hej";



// bodies[0].name
// bodies[0].latinName
// bodies[0].desc
// bodies[0].circumference   bodies[0].distance
// bodies[0].temp.day   bodies[0].temp.night
// bodies[0].moons
