import './style.css';
import { addToDoItem, displayAllTodos } from './modules/Todo.js';

const button =  document.getElementById('clearBtn');

const form = document.getElementById('add-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addToDoItem();
});

displayAllTodos();