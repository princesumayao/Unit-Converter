const input = document.getElementById("input")
const btnEl = document.getElementById("button")
const infoSections = document.querySelectorAll('.info p');


const meterToFeet = 3.281
const literToGallon = 0.264;
const kiloToPound = 2.204;

    btnEl.addEventListener('click', () => {
        const value = parseFloat(input.value);
        console.log(value)
        if (isNaN(value)) {
            alert("Please enter a valid number.");
            return input.value = "";  
        }

        // Length
        const metersToFeet = (value * meterToFeet).toFixed(3);
        const feetToMeters = (value / meterToFeet).toFixed(3);
        infoSections[0].textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;

        // Volume
        const litersToGallons = (value * literToGallon).toFixed(3);
        const gallonsToLiters = (value / literToGallon).toFixed(3);
        infoSections[1].textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;

        // Mass
        const kilosToPounds = (value * kiloToPound).toFixed(3);
        const poundsToKilos = (value / kiloToPound).toFixed(3);
        infoSections[2].textContent = `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`;
    });