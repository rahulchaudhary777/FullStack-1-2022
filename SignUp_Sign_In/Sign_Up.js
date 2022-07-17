import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js"

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";



const auth = getAuth();
const db = getDatabase();


document.getElementById("btn").onclick = data;

var name = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("pass");


var namev, emailv, passwordv;

function data(e) {
    readformData();
    createUserWithEmailAndPassword(auth, emailv, passwordv)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            set(ref(db, "UsersData/" + user.uid), {
                name: namev,
                email: emailv,
                pass: passwordv
            })
            // ...
            alert("User Created")
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
        });

    e.preventDefault();
    clearData();


};


function readformData() {
    namev = name.value;
    emailv = email.value;
    passwordv = password.value;
}


function clearData() {
    name.value = ""
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