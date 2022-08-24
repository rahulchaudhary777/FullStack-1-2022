var todoInput = document.getElementsByClassName("todo-input")[0];
var todoButton = document.querySelector(".todo-button")
var todoList = document.querySelector(".todolist")

todoButton.onclick = create;

todoList.onclick = performAction;

var data;

function create(e){

    data = todoInput.value;
    data = data.trim();

    if(data != ""){
        // alert(data)

        var newDiv = document.createElement("div");
        newDiv.classList.add("todoDiv");

        var newli = document.createElement("li")
        newli.classList.add("todo-li")

        newli.innerText = data;
        newDiv.appendChild(newli);
        
        var cmpBtn = document.createElement("button");
        cmpBtn.classList.add("cmpBtn");
        cmpBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

        newDiv.appendChild(cmpBtn);


        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

        newDiv.appendChild(deleteBtn);

        todoList.appendChild(newDiv)

        todoInput.value = ""
    }
    else{
        alert("Fields can not be empty")
    }
    
}

function performAction(e){
    var item = e.target

    if(item.classList[0] == "deleteBtn"){
        alert("clicked")
        // var parent = item.parentElement;
        // parent.remove();
    }

    if(item.classList[0] == "cmpBtn"){
        alert("c Clicked")
        // var parent = item.parentElement;
        // parent.classList.toggle("todo-done")
    }
}
