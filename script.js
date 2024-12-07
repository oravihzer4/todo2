import TodosManager from "./classes/manager.js";

let todoManage = new TodosManager();
console.log(todoManage);

function showLists() {
  document.getElementById("active").innerHTML = "";
  document.getElementById("completed").innerHTML = "";

  for (let todo of todoManage.todos) {
    if (todo.completed) {
      document.getElementById("completed").innerHTML += ` <div>
    <li class="list-group-item d-inline-block w-50">
    ${todo.title}</li>
    <button class="btn btn-success" disabled onclick="completeTodo(${todo.id})"><i class="fa-solid fa-check"></i></button>
    <button class="btn btn-primary" disabled><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="btn btn-danger" disabled><i class="fa-regular fa-trash-can"></i></button>
    </div>`;
    } else {
      document.getElementById("active").innerHTML += ` <div>
    <li class="list-group-item d-inline-block w-50">
    ${todo.title}</li>
    <button class="btn btn-success" onclick="completeTodo(${todo.id})"><i class="fa-solid fa-check"></i></button>
    <button class="btn btn-primary" onclick="updateTodo(${todo.id})"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="btn btn-danger" onclick="deleteTodo(${todo.id})"><i class="fa-regular fa-trash-can"></i></button>
    </div>`;
    }
  }
}
showLists();

window.addNew = function addNew() {
  let title = document.getElementById("title").value;
  todoManage.addTodo(title);
  document.getElementById("title").value = "";
  showLists();
};

window.completeTodo = function completeTodo(id) {
  todoManage.changeStatus(id);
  showLists();
};

window.deleteTodo = function deleteTodo(id) {
  todoManage.deleteTodo(id);
  showLists();
};

window.updateTodo = function updateTodo(id) {
  let newTitle = prompt("Enter New Task:");
  todoManage.updateTodo(id, newTitle);
  showLists();
};
