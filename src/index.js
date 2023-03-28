import './style.css';

const todos = [
  {
    index: 1,
    description: 'Finish awesome books mobile version',
    completed: false,
  },

  {
    index: 2,
    description: 'Grocery Shopping',
    completed: true,
  },

  {
    index: 3,
    description: 'Go for a 30-minute run',
    completed: false,
  },

  {
    index: 4,
    description: 'Review a pull request submitted by a colleague',
    completed: true,
  },

  {
    index: 5,
    description: 'Do laundry',
    completed: false,
  },
];

const toDosSection = document.getElementById('todos');
const displayToDos = todos.forEach((todo) => {
  const div = document.createElement('div');
  div.className = 'todo';
  const pTag = document.createElement('p');
  pTag.className = 'todo-description';
  pTag.innerHTML = todo.description;
  const completedBtn = document.createElement('input');
  completedBtn.type = 'checkbox';
  completedBtn.value = todo.completed;
  div.appendChild(completedBtn);
  div.appendChild(pTag);
  toDosSection.append(div);
});

displayToDos();