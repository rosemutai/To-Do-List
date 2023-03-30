import './style.css';
import { addToDo, displayToDos } from './modules/Todo.js';

const form = document.getElementById('add-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addToDo();
});

displayToDos();