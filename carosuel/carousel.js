var previousBtn = document.getElementsByClassName("control")[0];
var nextBtn = document.getElementsByClassName("control")[1];

var image = document.querySelector(".carosuel-container").children;
var imagelen = image.length;


previousBtn.onclick = function(){
    nextImage("previous");
}

nextBtn.addEventListener("click", function () {
  nextImage("next");
});

var index=0;

function nextImage(arrow) {
    if(arrow == "previous"){
        if(index == 0){index = imagelen-1}
        else{index--;}
    }
    else{
        index++;
        if(index == imagelen){index=0}
        
    }

    for (let i = 0; i < imagelen; i++) {
        image[i].classList.remove("main")
    }
    image[index].classList.add("main");
}

function move(){
    setInterval( () => {
        nextImage("next")
    },4000)
}

window.onload = move;