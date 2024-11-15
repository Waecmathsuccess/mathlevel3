// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add task to the list
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // Ignore empty input

    // Create list item
    const listItem = document.createElement('li');

    // Create task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', () => {
        listItem.remove();
    });

    // Add elements to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    // Add list item to the list
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = '';
});
