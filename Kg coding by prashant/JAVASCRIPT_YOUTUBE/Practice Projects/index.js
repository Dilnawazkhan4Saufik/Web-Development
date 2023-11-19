let todoList = [];

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function getFromStorage() {
  const storedTodos = localStorage.getItem('todoList');
  if (storedTodos) {
    todoList = JSON.parse(storedTodos);
  } else {
    todoList = [];
  }
}

getFromStorage();
displayTodoItems();

function handleAddTodo() {
  const todoInputBox = document.querySelector('#todo-inputBox');
  const todoDateBox = document.querySelector('#todo-dateBox');
  todoList.push({ item: todoInputBox.value, dueDate: todoDateBox.value });
  todoInputBox.value = '';
  todoDateBox.value = '';
  displayTodoItems();
  saveToStorage();
}

function handleDeleteTodo(i) {
  todoList.splice(i, 1);
  displayTodoItems();
  saveToStorage();
}

function displayTodoItems() {
  const containerElement = document.querySelector('.todo-list-container');
  let newHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    const { item, dueDate } = todoList[i];
    newHtml += `
        <div class="container-element">
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="delete-btn" onclick="handleDeleteTodo(${i});">Delete</button>
        </div>
        `;
  }

  containerElement.innerHTML = newHtml;
}
