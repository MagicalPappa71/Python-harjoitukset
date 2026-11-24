"use strict"
const henkilö = prompt("Anna nimi.");
const tuvat = [
    "Rohkeliko",
    "Luihuinen",
    "Puuskupuh",
    "Korpinkynsi"
];
const arpoo = Math.floor(Math.random()*tuvat.length)
document.querySelector("#henkilö", "#arpoo").textContent = henkilö + "olet tuvassa" + tuvat[arpoo];

