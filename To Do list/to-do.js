var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector(".todo-button");

var todoList = document.querySelector(".todo-list");

btn.onclick = create;

todoList.onclick = performAction;

var data;
function create(e) {
  e.preventDefault();
  // alert("Clicker")

  data = todoInput.value;
  // console.log(data)
  // alert(data)
  // data.trim();
  data = data.trim();

  if (data != "") {
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");

    newLi.innerText = data;
    newDiv.appendChild(newLi);

    var cmpbtn = document.createElement("button");
    cmpbtn.classList.add("cmpbtn");
    cmpbtn.innerHTML = '<i class="fa fa-check-square" aria-hidden="true"></i>';
    newDiv.appendChild(cmpbtn);

    var deletebtn = document.createElement("button");
    deletebtn.classList.add("deletebtn");
    deletebtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    newDiv.appendChild(deletebtn);

    todoList.appendChild(newDiv);

    todoInput.value = "";
  } else {
    alert("Data Field Cannot be Blank");
  }
}

function performAction(e) {
  var item = e.target;

  if (item.classList[0] == "cmpbtn") {
    // console.log("c press")

    var parent = item.parentElement;
    parent.classList.toggle("todo-done");
  }
  if (item.classList[0] == "deletebtn") {
    // console.log("d press")

    var parent = item.parentElement;
    parent.remove();
  }
}
