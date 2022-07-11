var hh = document.getElementById("hh");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

setInterval(function () {
  var date = new Date();

  var hr = date.getHours() * 30;
  var mm = date.getMinutes() * 6;
  var ss = date.getSeconds() * 6;

  hh.style.transform = `rotateZ(${hr + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
});

// digital clock

var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var session = document.getElementById("session");

setInterval(function () {
  var day = new Date();
  var hh = day.getHours();
  var min = day.getMinutes();
  var sec = day.getSeconds();

  // check AM / PM
  var sess = hh >= 12 ? "PM" : "AM";

  // convert midnight 00 to 12
  if (hh == 0) {
    hh = 12;
  }

  // convert 24 hour clock into 12 hour clock
  if (hh > 12) {
    hh = hh - 12;
  }

  // Add extra 0 if time values are single digit
  hh = hh < 10 ? "0" + hh : hh;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // store values into html div section
  hour.innerHTML = hh;
  minute.innerHTML = min;
  second.innerHTML = sec;
  session.innerHTML = sess;
});
