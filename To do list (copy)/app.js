// selectors

const todoinput = document.querySelector(".todo-input");
const todobtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");




// Events

todobtn.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteBtn)


//function 

function addTodo(e){

    //Prevent from auto submit
    e.preventDefault();

    //create div

   if(!todoinput.value == ""){
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // todo list 

    const toDOLi = document.createElement("li");
    toDOLi.innerHTML = todoinput.value;
    toDOLi.classList.add("new-item");
    todoDiv.appendChild(toDOLi);

    // check btn 

    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = `<i class = "fas fa-check"></i>`;
    checkBtn.classList.add("check-btn");
    todoDiv.appendChild(checkBtn);

    //del btn
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = `<i class = "fas fa-trash"></i>`;
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);

    todoList.appendChild(todoDiv)


    //after submitting the form

    todoinput.value = '';
    todoinput.focus();
   }
}

function deleteBtn(e){
    
    const clickedItem = e.target;

    if(clickedItem.classList[0] === "trash-btn"){
        //Animation
        let delebtn = clickedItem.parentElement;
        delebtn.classList.add("fall");
        delebtn.addEventListener("transitionend", function(){
            delebtn.remove();
        })
    }

    if(clickedItem.classList[0] === "check-btn"){
        clickedItem.parentElement.classList.toggle("checked")
    }


}



