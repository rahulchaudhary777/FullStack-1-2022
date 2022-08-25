function printHistory(num){
  document.getElementById("history-value").innerHTML = getFormattedNumber(num);
}

function getHistory(){
  return document.getElementById("history-value").innerHTML;
}

function printOutput(num) {
  if(num == ""){
    document.getElementById("output-value").innerHTML = "";
  }
  else{
    document.getElementById("output-value").innerHTML = getFormattedNumber(num);
  }
}

function getOutput() {
  return document.getElementById("output-value").innerHTML;
}

function getFormattedNumber(number){
  let num = number;
  let value = num.toLocaleString("hi-IN");
  return value;
}

function reverseFormattedNumber(num){
  let value =  num.replace(/,/g,"")
  return value;
}

var operator = document.getElementsByClassName("operator");

for (let index = 0; index < operator.length; index++) {
  operator[index].addEventListener('click', () => {
    if(operator[index].innerHTML == "C"){
      printHistory("");
      printOutput("0");
    }
    else if(operator[index].innerHTML == "CE"){
      let out = reverseFormattedNumber(getOutput()).toString();
      if(out){ // if output has a value
        out = out.substring(0, out.length - 1);
        printOutput(out);
      }
    }

    else{
      var output = getOutput();
      var history = getHistory();

      if(output == "" && history != ""){
        if(isNaN(history[history.length-1])){
          history = history.substring(0,history.length-1);
        }
      }

      if(output != "" || history != ""){
        
        output = reverseFormattedNumber(output);
        history = history + output;

        if(operator[index].innerHTML == "="){
          let result = eval(history);
          printHistory("");
          printOutput(result);
        }
        
        else{
          
          history = history+operator[index].innerHTML
          printHistory(history);
          printOutput("")
        }

      }
    }
  })
}
  
var number = document.getElementsByClassName("number");

for (let index = 0; index < number.length; index++) {
  number[index].addEventListener('click', () => {
    let output = reverseFormattedNumber(getOutput());

    if(output == "0") output = "";
    output = output+number[index].id;
    output = output.replace("--","-");
    console.log(getFormattedNumber(output))
    printOutput(output);
  });
}

// Theme Section

var themeDiv = document.querySelector(".theme");
var icon = document.querySelector(".icon");
var operator = document.querySelectorAll(".operator");
var num = document.querySelectorAll(".number");

themeDiv.addEventListener("click", () => {

  if (this.innerHTML == "&#9728"){
     this.innerHTML = "&#9790";

    document.querySelector("body").style.background = "#454545";
    document.querySelector(".container").style.backgroundColor = "#181A18";
    themeDiv.style.backgroundColor = "rgba(255, 255, 255, 0.705)";
    
    num.forEach(element => {
      element.style.backgroundColor = "rgba(0,0,0,0.5)";
      element.style.boxShadow = "2px 2px 5px rgba(255, 255, 255, 0.4)";
      element.style.color = "white"
    });

    document.querySelector("#output-value").style.color = "white";
    document.querySelector("#history-value").style.color = "rgba(255,255,255,0.7)";

    operator.forEach((element) => {
      element.style.color = "white";
    });
  }

  else if(this.innerHTML = "&#9790"){
    this.innerHTML = "&#9728";

    document.querySelector("body").style.background = "#d3d3d3";
    document.querySelector(".container").style.backgroundColor = "white";
    themeDiv.style.backgroundColor = "rgba(0,0,0,0.5)";

    num.forEach((element) => {
      element.style.backgroundColor = "rgb(255,255,255)";
      element.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.4)";
      element.style.color = "black";
    });

    document.querySelector("#output-value").style.color = "black";
    document.querySelector("#history-value").style.color =
      "rgba(0,0,0,0.5)";

    operator.forEach((element) => {
      element.style.color = "black";
    });
  }
})