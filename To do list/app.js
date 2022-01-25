// Selectors

const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filerOption = document.querySelector(".filter-todo")


// Event Listeners

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteBtn);
filerOption.addEventListener("click", filerTodo)


// Functions


function addTodo(e){
    e.preventDefault();
    
    // Todo Div
    
    const todoDiv =  document.createElement("div");
    todoDiv.classList.add("todo");
    // createLI
    
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add("new-item");
    todoDiv.appendChild(newTodo)
    
    // CHECK MARK BUTTON
    
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML =   `<i class = "fas fa-check"></i>`;
    completeBtn.classList.add("complete-btn");
    todoDiv.appendChild(completeBtn);
    
    
    // CHECK MARK BUTTON
    
    const trasnBtn = document.createElement("button");
    trasnBtn.innerHTML =   `<i class = "fas fa-trash"></i>`;
    trasnBtn.classList.add("trasn-btn");
    todoDiv.appendChild(trasnBtn);
    
    
    // append new list to todo
    todoList.appendChild(todoDiv)
    
    //clear todo input value
    
    todoInput.value = ''; 
    todoInput.focus(); 
}

function deleteBtn(e){
    const item = e.target;
    // console.log(item.classList[0]); return the clicked class
    
    if ( item.classList[0] === "trasn-btn"){
        
        // add Animation 
        const todo = item.parentElement;
        todo.classList.add("fall")
        // item.parentElement.remove();
        todo.addEventListener("transitionend",function(){
            todo.remove();
        })
    }
    
    if ( item.classList[0] === "complete-btn"){
        item.parentElement.classList.toggle("completed")
    }
}


function filerTodo(e){
    const todos = todoList.childNodes;
    todos.forEach((todo)=>{
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none"
                }
                break;
            
        }
    })
}


