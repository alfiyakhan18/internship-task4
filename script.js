let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => deleteTask(index);

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task) {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

renderTasks(); // Initial call to display stored tasks