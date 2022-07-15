import { getDatabase } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";

var rollV;
// var nameV;
var genderV;
var addressV;

const db = getDatabase();

var roll = document.getElementById("roll")
// var name = document.getElementById("name");
var gender = document.getElementById("gender");
var address = document.getElementById("address");



function insertdata(e) {
    e.preventDefault();
    readFormData();


    // Code to sent the data to firebase
    Set(ref(db, "data/" + rollV),{
        rollNo: rollV,
        // name : namV,
        gender: genderV,
        address: addressV
    }).then( () => {
        alert("data Stored Successfull")
    }).catch((error) => {
        alert("unsuccessful", error);
    })

    clearData();
}

function readdata(e) {
    e.preventDefault();
    readFormData();

    const dref = ref(db);

    // get(child(dref, "data/" + rollV))
    // then((snapshot.exists()){
    //     RollBOX = rollV.value  })
    clearData();

}

function updatedata(e) {
    e.preventDefault();
    readFormData();
    clearData();

}

function deletedata(e) {
    e.preventDefault();
    readFormData();
    clearData();

}


function readFormData() {
    rollV = roll.value;
    // nameV = name.value
    genderV = gender.value;
    addressV = address.value

    console.log(rollV+" "+genderV+" "+addressV);
}

function clearData() {
    roll.value = "";
    // nam.value = ""
    gender.value = ""
    address.value = ""
}

// Buttons

var insert = document.getElementsByClassName("queryBtn")[0].onclick = insertdata;
var read = document.getElementsByClassName("queryBtn")[1].onclick = readdata;;
var update = document.getElementsByClassName("queryBtn")[2].onclick = updatedata;;
var del = document.getElementsByClassName("queryBtn")[3].onclick = deletedata;;