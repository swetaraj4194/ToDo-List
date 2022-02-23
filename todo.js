
//counting total ,pending and finished TODO.

function updateCounters(){
    // total number of task assign
    const totalCount=document.getElementsByClassName("total")[0];
    const totalTodos=document.getElementsByClassName("todo").length;
    totalCount.innerHTML=totalTodos;

// number of task completed
const completedCount=document.getElementsByClassName("done")[0];
const completedTodos=document.getElementsByClassName("finished").length;
completedCount.innerHTML=completedTodos;

//number of pending todos

const pendingCount = document.getElementsByClassName("todos")[0];
const pendingTodos = totalTodos - completedTodos;
pendingCount.innerHTML = pendingTodos;

}
updateCounters();

//catogrizing (pending Todo and done Todo) for new Todo items.

function toggleDone(event) {
    const checkbox = event.currentTarget;
    
    if (checkbox.checked) {
      
      checkbox.parentElement.parentElement.className = "todo finished";
    } else {
      checkbox.parentElement.parentElement.className = "todo pending";
    }
  
    updateCounters();
  }
  
  const checkboxes = document.querySelectorAll(".todo input");
  
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", toggleDone);
  }

//creating "input" element inside "label" element. to store newTodo list 


 function createTodo(title){
     const label=document.createElement("lebel");

     const input=document.createElement("input");
     input.type="checkbox";
     input.checked=false;

     input.addEventListener("change",toggleDone);
     label.appendChild(input);
    
     const text=document.createTextNode(" "+title);
     label.appendChild(text);

     const listItem= document.createElement("li");
     listItem.className="todo";
     listItem.appendChild(label);

     const ulist=document.querySelector(".list")
     ulist.appendChild(listItem);


 }

 // Process of displing TODO list:
 
 submitEvent=document.querySelector("form")

 submitEvent.addEventListener("submit",function addNewTodo(event){ 

  event.preventDefault();

  const inputField=document.querySelector("#formInput");
  const newTodoTitle=inputField.value;
  
  createTodo(newTodoTitle);

  inputField.value=null;

  updateCounters();

});

//Removing finished Todo items list:

document.getElementById("clean-up").addEventListener("click", cleanUpDoneTodos);

function cleanUpDoneTodos() {

  const doneItems = document.querySelectorAll(".finished");

  
  for (let i = 0; i < doneItems.length; i++) {
    
    doneItems[i].remove();
  }

  updateCounters();
}



