
const inputField = document.getElementById("todoin");
const addButton = document.querySelector("button");

addButton.addEventListener("click", function () {
  const task = inputField.value;
  
  if (task.trim() !== "") {
    const taskDiv = document.createElement("div");
    taskDiv.textContent = task;
    const todoList = document.getElementById("todo");
    todoList.appendChild(taskDiv);
    inputField.value = "";
  }
});
