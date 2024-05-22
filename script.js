var add = document.querySelector(".btn");
var input = document.querySelector("input");
var list = document.querySelector(".list");
var part = document.querySelector(".part")
input.focus();

let data = localStorage.getItem("LIST")
console.log(data)
let todos = data ? JSON.parse(data) :[]
function createTodo() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    let divTodo = `<div class="part" onclick="finishTodo(this)" >
    <p class="text">${todo}</p>
        <i class="bi bi-trash trash" onclick ="removeTodo(this,'${index}')"></i>
      </div>`;
      list.innerHTML += divTodo
  });
  localStorage.setItem("LIST",JSON.stringify(todos))
  
}
createTodo()

function removeTodo(element, index){
    console.log(todos[0])
    todos.splice(index,1)
    console.log(todos.splice(index,1))
    element.parentElement.remove()
    // localStorage.removeItem("INDEX")
}

function addTodoByKeyUp(e) {
    if(e.key == 'Enter') {
        let todo = e.target.value.trim()
        if(todo != ''){
            todos.push(todo)
            createTodo()
            e.target.value = ""
        }
    }
}
function finishTodo(element){
    let saveClass, add, remove
    if(!element.classList.contains("finish")){
        element.classList.add("finish")
    }else{
        element.classList.remove("finish")

    }
    saveClass = {
        finish : ""
    }
}


input.addEventListener('keyup',addTodoByKeyUp)
add.addEventListener('click',((e) => {
    let todo = input.value.trim()
        if(todo != ''){
            todos.push(todo)
            createTodo()
            input.value = ""
            
        }
        
}))

