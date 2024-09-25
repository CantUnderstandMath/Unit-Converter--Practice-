/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let meter = 3.281
let liter = 0.264
let kilo = 2.204

//basic convert function
function convert() {
    const number = document.getElementById("number");
    let numberVal = number.value;
    
    //conversions
    let mtf = numberVal * meter; // 1 meter = 3.281
    let ftm = numberVal / meter;
    let ltg = numberVal * liter; // 1 liter = 0.264
    let gtl = numberVal / liter;
    let ktp = numberVal * kilo; // 1 kilo = 2.204
    let ptk = numberVal / kilo;
    
    document.getElementById("len").innerHTML = `${numberVal} meters = ${mtf.toFixed(3)} feet | ${numberVal} feet = ${ftm.toFixed(3)} meters`;
    
    document.getElementById("vol").innerHTML = `${numberVal} liters = ${ltg.toFixed(3)} gallons | ${numberVal} gallons = ${gtl.toFixed(3)} liters`;
    
    document.getElementById("mass").innerHTML = `${numberVal} kilos = ${ktp.toFixed(3)} pounds | ${numberVal} pounds = ${ptk.toFixed(3)} kilos`;
    

}