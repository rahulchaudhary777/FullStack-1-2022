function currentTime() {
  var date = new Date();
  var hh = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();
  var session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  var time = document.getElementById("time");
  time.innerHTML = `${hh} : ${mm} : ${ss} ${session}`;

  var t = setTimeout(function () {
    currentTime();
  }, 1000);

  var greet = document.getElementById("greeting");

  if (hh >= 5 && hh < 12 && session == "AM") {
    greet.innerHTML = "Good Morning";
  } else if (hh >= 12 && hh < 6 && session == "PM") {
    greet.innerHTML = "Good Afternoon";
  } else if ((hh) => 6 && hh < 12 && session == "PM") {
    greet.innerHTML = "Good Evenging";
  } else {
    greet.innerHTML = "Good Night";
  }

  CurrentMonth();
}

function CurrentMonth() {
  var date = new Date();
  var day = date.getDay();
  var month = date.getMonth();
  var d = date.getDate();
  var year = date.getFullYear();

  const weekDay = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "oct",
    "Nov",
    "Dec",
  ];

  document.getElementById(
    "month"
  ).innerHTML = `${weekDay[day]} ${monthName[month]} ${d} ${year}`;
}

currentTime();

const name = document.getElementById("name");

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

function getName() {
  if (localStorage.getItem("myData") === null) {
    name.innerHTML = "[Enter Name]";
  } else {
    name.innerHTML = localStorage.getItem("myData");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.keyCode == 13) {
      localStorage.setItem("myData", e.target.innerHTML);
      name.blur();
    }
  } else {
    localStorage.setItem("myData", e.target.innerHTML);
  }
}

getName();
