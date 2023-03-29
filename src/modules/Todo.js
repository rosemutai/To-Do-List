const descriptionInput = document.getElementById('description-input');
let allToDos = [];
const todosList = document.getElementById('todos');

const deleteToDoItem = (index) => {
  allToDos.splice(index, 1);
  todosList.innerHTML = '';
  localStorage.setItem('alltasks', JSON.stringify(allToDos));
};

const editToDoList = (index, newValue) => {
  allToDos[index].description = newValue;
};

const toggleCompletedTask = (index) => {
  allToDos[index].completed = !allToDos[index].completed;
};

const displayToDos = () => {
  allToDos.forEach((todo, index) => {
    const div = document.createElement('div');
    div.className = 'todo';

    const pTag = document.createElement('p');
    pTag.className = 'todo-description';
    pTag.innerHTML = todo.description;
    pTag.addEventListener('click', () => editToDoList(index, todo.description));

    const completedBtn = document.createElement('input');
    completedBtn.type = 'checkbox';
    completedBtn.value = todo.completed;
    completedBtn.addEventListener('click', toggleCompletedTask(index));

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'more_vert';
    deleteBtn.className = 'material-symbols-outlined';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteToDoItem(index));

    div.appendChild(completedBtn);
    div.appendChild(pTag);
    div.appendChild(deleteBtn);
    todosList.append(div);
  });
};

if (localStorage.getItem('alltasks')) {
  allToDos = JSON.parse(localStorage.getItem('alltasks'));
  displayToDos();
} else {
  todosList.innerHTML = 'Currenty you have no todos';
}

const addToDo = () => {
  todosList.innerHTML = '';
  const newTodo = {
    id: allToDos.length,
    description: descriptionInput.value,
    completed: false,
  };

  allToDos.push(newTodo);
  localStorage.setItem('alltasks', JSON.stringify(allToDos));
  descriptionInput.value = '';
  displayToDos();
};

export { addToDo, displayToDos, deleteToDoItem };