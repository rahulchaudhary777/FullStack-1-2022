var arr = [
  "songs/audio-1.mp3",
  "songs/audio-2.mp3",
  "songs/audio-3.mp3",
  "songs/audio-4.mp3",
  "songs/audio-5.mp3",
  "songs/audio-6.mp3",
  "songs/audio-7.mp3",
];

var play = document.getElementsByClassName("play")[0];
var backward = document.getElementsByClassName("play")[1];
var forward = document.getElementsByClassName("play")[2];

var low = document.querySelectorAll(".content .audioIcon")[0];
var loop = document.querySelectorAll(".content .audioIcon")[1];
var high = document.querySelectorAll(".content .audioIcon")[3];

var musicName = document.querySelector("#musicName");

var image  = document.querySelector(".image img");


var audio = document.querySelector("audio");
audio.loop = true;

var sTime = document.getElementsByTagName("p")[0];
var eTime = document.getElementsByTagName("p")[1];

var progress = document.getElementsByClassName("progress")[0];
var progressBar = document.getElementsByClassName("progress-bar")[0];

// if()

audio.ontimeupdate = function (e) {
    progress.style.width = Math.floor((audio.currentTime*100)/audio.duration)+"%";
    sTime.innerHTML = Math.floor(audio.currentTime);
    eTime.innerHTML = Math.floor(audio.duration);
}

progressBar.onclick = function(e){
    audio.currentTime = (e.offsetX/progressBar.offsetWidth) * audio.duration;

    progress.style.transition = none;
}

play.onclick = function (){

    if(audio.paused){
        audio.play();
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");

    }
    else{
        audio.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    } 
    

}
var i = 1;

forward.onclick = function () {

  if (audio.getAttribute("src") != "songs/song-6.mp3") {

    audio.setAttribute("src", "songs/song-" + (i + 1) + ".mp3");
    image.setAttribute("src", "images/song-"+(i+1) + ".jpg");

    musicName.innerHTML = `Track ${i + 1}`;

    audio.play();
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");

    i += 1;
  }
}

backward.onclick = function() {
    if (audio.getAttribute("src") != "songs/song-1.mp3") {

      audio.setAttribute("src", "songs/song-" + (i - 1) + ".mp3");
      image.setAttribute("src", "images/song-" + (i - 1) + ".jpg");
      
      musicName.innerHTML = `Track ${i - 1}`;
      
      audio.play();
      play.classList.remove("fa-play");
      play.classList.add("fa-pause");

      i -= 1;
    }
}

low.onclick = function(){
    if(audio.volume > 0.1 && audio.volume <= 1){
        audio.volume -= 0.1;
    }
}

high.onclick = function () {
  if (audio.volume >= 0 && audio.volume < 1) {
    audio.volume += 0.1;
  }
}

// for keyboard

document.addEventListener("keypress", function(event){

    console.log(event.key)

    if((event.key == "Enter" || event.keyCode =="32") && audio.paused){
        audio.play();
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
    }

    else if (event.key == "Enter" || event.keyCode == "32") {
      audio.pause();
      play.classList.remove("fa-pause");
      play.classList.add("fa-play");
      
    }

    if(event.key == "l" && audio.volume > 0.1 && audio.volume <= 1){
        audio.volume -= 0.1;
    }
    else if(event.key == "h" && audio.volume >= 0 && audio.volume < 1){
        audio.volume += 0.1;
    }
})