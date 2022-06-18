const input = document.getElementById("input")
let inputNumber = 0


const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    inputNumber = input.value
    
    document.getElementById("meter-feet").innerHTML = `${input.value} meters = ${meterIntoFeet().toFixed(3)} feet | ${input.value} feet = ${feetIntoMeter().toFixed(3)} meters`

    document.getElementById("liters-gallons").innerHTML = `${input.value} liters = ${literIntoGallon().toFixed(3)} gallons | ${input.value} gallons = ${gallonIntoLiter().toFixed(3)} liters`

    document.getElementById("kg-pounds").innerHTML = `${input.value} kilos = ${kgIntoPound().toFixed(3)} pounds | ${input.value} pounds = ${poundIntoKg().toFixed(3)} kilos`
})

function meterIntoFeet(){
    let result = inputNumber * 3.281
    return result
}

function feetIntoMeter(){
    let result = inputNumber / 3.281
    return result
} 

function literIntoGallon(){
    let result = inputNumber * 0.262
    return result
}

function gallonIntoLiter(){
    let result = inputNumber * 3.785
    return result
}

function kgIntoPound(){
    let result = inputNumber * 2.204
    return result
}

function poundIntoKg(){
    let result = inputNumber / 2.204
    return result
}