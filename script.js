let taskInput = document.querySelector("#task");

let btnAddTask = document.querySelector("#addNewTask");

let btnFilterAll = document.querySelector("#filterAll");
btnFilterAll.classList.add('underline');
let btnFilterCompleted = document.querySelector("#filterCompleted");

let array = [];

// BOTÃO PARA ADICIONAR A TASK
btnAddTask.addEventListener('click', addNewTask)

// FUNÇÃO PARA ADICIONAR A TASK
function addNewTask(event) {
  event.preventDefault()
  
  if (taskInput.value.trim() === "") return;
  
  // LISTA
  const taskList = document.querySelector("#taskList");
  
  // CHAMADA DA FUNÇÃO PARA CRIAR O ELEMENTO
  let taskItem = createTaskElement(taskInput.value);
  
  taskList.prepend(taskItem);
  taskInput.value = "";
  
  filterCompleted(taskItem);
}

// FUNÇÃO PARA CRIAR UMA TASK
function createTaskElement(text) {

  // CRIAÇÃO DE TAGS
  const li = document.createElement("li")
  li.classList.add('task');
  
  let span = document.createElement("span");
  span.innerText = taskInput.value;
  
  let btn = document.createElement("button");
  btn.innerText = "×";
  btn.classList.add('delete');
  btn.addEventListener('click', () => li.remove());
  
  // ADICIONAR ELEMENTOS DENTRO DO LI
  li.append(span, btn);

  // CHECKED AO SEU CLICADO
  li.addEventListener('click', () => li.classList.toggle('checked'));
  
  return li;
}

// FUNÇÃO DE FILTRO DE TASK
function filterCompleted(item) {
  // ADICIONAR CADA ITEM AO ARRAY
  array.unshift(item);

  // BOTÃO DE MOSTRAR TODAS AS TASKS
  btnFilterAll.addEventListener('click', () => {
    btnFilterAll.classList.add('underline');
    btnFilterCompleted.classList.remove('underline');
    array.forEach(item => {
      if (item.classList && item?.classList?.contains('task')) {
        item.style.display = "flex"
      } 
    })
  })
  
  // BOTÃO DE FILTRAR TASKS COMPLETAS
  btnFilterCompleted.addEventListener('click', () => {
    btnFilterCompleted.classList.add('underline');
    btnFilterAll.classList.remove('underline');
    array.forEach(item => {
      if (item.classList && !item?.classList?.contains('checked')) {
        item.style.display = "none"
      } else {
        item.style.display = "flex"
      }
    })
  })
  
}