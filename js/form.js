var eye = document.getElementsByClassName("fa-eye")[0];

eye.onclick = function () {
  var pass = document.querySelectorAll(".password input")[0];

  if (pass.type == "password") {
    pass.type = "text";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  } else {
    pass.type = "password";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  }
};

var input1 = document.getElementById("fname");
var input2 = document.getElementById("lname");
var input3 = document.getElementById("password");
var input4 = document.getElementById("gender");
var input5 = document.getElementById("hobby");
var input6 = document.getElementById("city-box");
var input7 = document.getElementById("mobile");
var input8 = document.getElementById("birthDate");

var data = {
  fname: "",
  lname: "",
  password: "",
  gender: "",
  hobby: "",
  city: "",
  mobile: "",
  dob: ""
};

var btn1 = document.getElementById("submit");

btn1.onclick = function() {
    data.fname = input1.value;
    data.lname = input2.value;
    data.password = input3.value;
    data.gender = input4.value;
    data.hobby = input5.value;
    data.city = input6.value;
    data.mobile = input7.value;
    data.dob = input8.value;

    localStorage.setItem("Student", JSON.stringify(data));
}