import { fetchBaseURL, displayPlanetInfo, searchPlanets, changeBackgroundColor } from "./module/api.js";

fetchBaseURL();
displayPlanetInfo();
searchPlanets();
changeBackgroundColor();



/*
// Change Pages funkar!!
document.addEventListener("DOMContentLoaded", function () {
    let earthElement = document.getElementById("earth");
    if (earthElement) {
        earthElement.addEventListener("click", earthPage);
    }
});*/
