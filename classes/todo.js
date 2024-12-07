let id = 1;
class Todo {
  constructor(title) {
    this.id = id++;
    this.title = title;
    this.completed = false;
  }
}
// function demoFunc() {
//   let num = 7;
//   return num;
// }
export default Todo;
// export { Todo, demoFunc };
