import Todo from "./todo.js";

class TodosManager {
  constructor() {
    this.todos = [];
  }
  addTodo(title) {
    this.todos.push(new Todo(title));
  }
  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
  }
  updateTodo(id, newTitle) {
    let todoIndexToUpdate = this.todos.findIndex((todo) => todo.id == id);
    this.todos[todoIndexToUpdate].title = newTitle;
  }
  changeStatus(id) {
    let todoIndexToUpdate = this.todos.findIndex((todo) => todo.id == id);
    this.todos[todoIndexToUpdate].completed = true;
  }
}
// export
export default TodosManager;
