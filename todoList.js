const todo = document.querySelector('input[id="textBox"]');
const submit = document.querySelector('input[id="submitButton"]');
const todoList = document.querySelector('ul[id="todoList"]');
let storage = [];

if(localStorage.getItem('todo')) {
  storage = JSON.parse(localStorage.getItem('todo'));
  storage.forEach(function(item) {
    const todoList = document.querySelector('ul[id="todoList"]');
    const newItem = newTodo(item);
    todoList.appendChild(newItem);
  })
}

function newTodo (text) {
  const todoItem = document.createElement('li');
  todoItem.innerText = text;
  return todoItem;
}

submit.addEventListener('click', function(e) {
  e.preventDefault();
  if (todo.value.trim() !== '') {
  const todoList = document.querySelector('ul[id="todoList"]');
  const newItem = newTodo(todo.value.trim());
  storage.push(todo.value.trim());
  localStorage.setItem('todo', JSON.stringify(storage));
  todoList.appendChild(newItem);
  todo.value = '';

    }
  }
);

todoList.addEventListener('click', function(e) {
  if(e.target.style.textDecoration === 'line-through') {
    e.target.style.textDecoration = 'none';
  }
  else {
    e.target.style.textDecoration = 'line-through';
  }
})

todoList.addEventListener('dblclick', function(e) {
  if(e.target.tagName === 'LI') {
    e.target.remove();
    const eItem = e.target.innerText;
    const index = storage.indexOf(eItem);
    storage.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(storage));
  }
})




