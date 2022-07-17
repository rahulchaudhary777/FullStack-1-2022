import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

import { getDatabase, update, ref } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";


const db = getDatabase();
const auth = getAuth();


var name = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("pass");


var btn = document.getElementById("btn")

var emailv, passwordv;

// var emailx, passwordx;
btn.addEventListener("click", (e) => {
    e.preventDefault();
    readformData();


    signInWithEmailAndPassword(auth, emailv, passwordv)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            const dt = new Date();
            const Hours = dt.getHours();
            const min = dt.getMinutes();

            const date = dt.getDate();
            const mon = dt.getMonth();
            const year = dt.getFullYear();
            // ...
            update(ref(db, "UsersData/" + user.uid), {
                last_login: `${date}/${mon}/${year}    ${Hours}h-${min}min`
            }).then(() => {

                alert("User Login Successfully")
                window.location.href="./Congrulations.html"
            })

        })
        .catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage)
        });
    clearData();
})


function readformData() {
    emailv = email.value;
    passwordv = password.value;
}


function clearData() {
    email.value = ""
    password.value = ""
}





document.getElementById("eye").onclick=toggle;
var state=false;
function toggle(){
    if(state){
        document.getElementById("pass").setAttribute("type","password");
        state=false;
        document.getElementById("eye").style.color="black"
    }else{
        document.getElementById("pass").setAttribute("type","text");
        state=true;
        document.getElementById("eye").style.color="green"

    }
}