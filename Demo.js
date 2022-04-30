class Planet {
    PlanetName;
    PlanetVolume;
}

const Earth = new Planet();
Earth.PlanetName = "Earth";
Earth.PlanetVolume = 259875159532;

const Jupiter = new Planet();
Jupiter.PlanetName = "Jupiter";
Jupiter.PlanetVolume = 343400000000000;

let CalculatedVolume = Jupiter.PlanetVolume / Earth.PlanetVolume;

let Earths = document.getElementById('Earths');
let Jupiter = document.getElementById('Jupiter');

let selectPlanet = document.getElementById('selectPlanet');
let selectContainingPlanet = document.getElementById('selectContainingPlanet');

if (selectPlanet == Earths && selectContainingPlanet == Jupiter) {

    let display = document.getElementById('display');
    display.innerHTML = CalculatedVolume;
    //display.appendChild(CalculatedVolume);
    console.log(CalculatedVolume);

}
