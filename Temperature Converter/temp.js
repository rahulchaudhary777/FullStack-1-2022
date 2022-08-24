var celcius = document.querySelectorAll("input")[0];
var fahr = document.querySelectorAll("input")[1];


function ctf(){
    let celciusValue = parseFloat(celcius.value);
    let output = (celciusValue*1.8)+32;
    fahr.value = parseFloat(output.toFixed(2))
}

function ftc(){
    let fahrValue = parseFloat(fahr.value);
    let output = (fahrValue-32)*5/9;
    celcius.value = parseFloat(output.toFixed(2));
}

window.onload = () => {fahr.value = ""; celcius.value=""}
