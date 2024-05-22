var add = document.querySelector(".btn");
var input = document.querySelector("input");
var list = document.querySelector(".list");

input.focus();

let data = localStorage.getItem("LIST")
console.log(data)
let todos = data ? JSON.parse(data) :[]
function createTodo() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    let divTodo = `<div class="part" onclick="finishTodo(this)" >
    <p class="text">${todo.text?todo.text:todo}</p>
        <i class="bi bi-trash trash" onclick ="removeTodo(this,'${index}')"></i>
      </div>`;
      list.innerHTML += divTodo
      console.log(divTodo)
  });
  let save = []
  let pTag = document.querySelectorAll('.text')

    pTag.forEach((item) => {
        let parent = item.parentElement
        console.log(parent)
        save.push({
            text: item.textContent,
            finished: parent.classList.contains('finish')
        })
        console.log(item.textContent)
      })

  
  localStorage.setItem("LIST",JSON.stringify(save))

}
createTodo()

function removeTodo(element, index){
    todos.splice(index,1)
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
    if(!element.classList.contains("finish")){
        element.classList.add("finish")
   
    }else{
        element.classList.remove("finish")

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

