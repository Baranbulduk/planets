import { fetchBaseURL, displayPlanetInfo, searchPlanets } from "./module/api.js";

fetchBaseURL();
displayPlanetInfo();
searchPlanets();

/*
// Change Pages funkar!!
document.addEventListener("DOMContentLoaded", function () {
    let earthElement = document.getElementById("earth");
    if (earthElement) {
        earthElement.addEventListener("click", earthPage);
    }
});*/
