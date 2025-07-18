let taskInput = document.querySelector("#task");
let btnAddTask = document.querySelector("#addNewTask");

btnAddTask.addEventListener('click', addNewTask)

function addNewTask(event) {
  event.preventDefault()
  
  if (taskInput.value.trim() === "") return;
  
  const taskList = document.querySelector("#taskList");
  
  let taskItem = createTaskElement(taskInput.value);
  
  taskList.prepend(taskItem);
  taskInput.value = "";
}


function createTaskElement(text) {
  const li = document.createElement("li")
  li.classList.add('task');

  let span = document.createElement("span");
  span.innerText = taskInput.value;

  let btn = document.createElement("button");
  btn.innerText = "×";
  btn.classList.add('delete');
  btn.addEventListener('click', () => li.remove());

  li.append(span, btn);
  li.addEventListener('click', () => li.classList.toggle('checked'));

  return li;
}

