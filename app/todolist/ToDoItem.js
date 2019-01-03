function ToDoItem(title) {
  this.title = title;
  let d = new Date();
  this.date = "Edited " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  this.backgroundColor = "#FFFFFF";
}

export default ToDoItem;
