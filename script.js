// buttons
const home = document.querySelector('#home-btn');
const tasks = document.querySelector('#tasks-btn');
const notes = document.querySelector('#notes-btn');
const calendar = document.querySelector('#calendar-btn');

// HTML Pages
const mainWindow = document.querySelector('.main-window');
const toDoDiv = document.querySelector('.to-do-div');
const tasksDone = document.getElementById('done');
const homeHTML = '<div class="home"><div class="links"><a href="#"><img src="img/youtube.svg"></a><a href="#"><img src="img/twitter.svg"></a><a href="#"><img src="img/github.svg"></a></div><div><p>Hello, David!</p></div></div>'
//const tasksHTML = '<div class="tasks"><div class="new-task"><span class="form"><input autocomplete="off" type="text" id="task-input" placeholder="What are your plans today?"><button class="submit-btn" onclick="newTask()" id="task-submit" >Add task</button></span></div><div class="lists"><div class="div-list"><h1>To-do</h1><div class="to-do-div" id="unfinished"></div></div><div class="div-list"><h1>Finished!</h1><div class="to-do-div" id="done"></div></div></div></div>';
//const tasksHTML = '<div class="tasks"><p><label for="new-task">Add Item</label><input id="new-task" type="text"><button>Add</button></p><h3>Todo</h3><ul id="incomplete-tasks"><li><input type="checkbox"><label>Pay Bills</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li><li class="editMode"><input type="checkbox"><label>Go Shopping</label><input type="text" value="Go Shopping"><button class="edit">Edit</button><button class="delete">Delete</button></li></ul><h3>Completed</h3><ul id="completed-tasks"><li><input type="checkbox" checked><label>See the Doctor</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li></ul></div>';













// Define all UI variable
const todoList = document.querySelector('.list-group');
const form = document.querySelector('#form');
const todoInput = document.querySelector('#todo');
const clearBtn = document.querySelector('#clearBtn');
const search = document.querySelector('#search');

// Load all event listners
allEventListners();


// Functions of all event listners
function allEventListners() {
    // Add todo event
    form.addEventListener('submit', addTodo);
    // Remove and complete todo event
    todoList.addEventListener('click', removeTodo);
    // Clear or remove all todos
    clearBtn.addEventListener('click', clearTodoList);
    // Search todo event
    search.addEventListener('keyup', searchTodo);
}


// Add todo item function
function addTodo(e) {
    if (todoInput.value !== '') {
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'list-group-item';
        // Add complete and remove icon
        li.innerHTML = `<i class="far fa-square done-icon"></i>
                        <i class="far fa-check-square done-icon"></i>
                        <i class="far fa-trash-alt"></i>`;
        // Create span element
        const span = document.createElement('span');
        // Add class
        span.className = 'todo-text';
        // Create text node and append to span
        span.appendChild(document.createTextNode(todoInput.value));
        // Append span to li
        li.appendChild(span);
        // Append li to ul (todoList)
        todoList.appendChild(li);

        // Clear input
        todoInput.value = '';
    } else {
        alert('Please add todo');
    }

    e.preventDefault();
}


// Remove and complete todo item function
function removeTodo(e) {
    // Remove todo
    if (e.target.classList.contains('fa-trash-alt')) {
        if (confirm('Are you sure')) {
            e.target.parentElement.remove();
        }
    }

    // Complete todo
    if (e.target.classList.contains('todo-text')) {
        e.target.parentElement.classList.toggle('done');
    }
    if (e.target.classList.contains('done-icon')) {
        e.target.parentElement.classList.toggle('done');
    }
}


// Clear or remove all todos function
function clearTodoList() {
    todoList.innerHTML = '';
}


// Search todo function
function searchTodo(e) {
    const text = e.target.value.toLowerCase();
    const allItem = document.querySelectorAll('.list-group-item');
    for (let task of allItem) {
        const item = task.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    };
}




























// - - - Functionalitys - - - //
let currentPage;

const showPage = (page) => {
    mainWindow.insertAdjacentHTML('afterbegin', page);
}

const hidePage = () => {
    if (typeof currentPage !== 'undefined') {
        let div = document.querySelector(currentPage);
        div.remove()
    }
}

// - - -  TASKS - - - //
// let currentTasks = [];
// let finishedTasks = [];

// const input = document.getElementById("task-input");
// input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//    event.preventDefault();
//    document.getElementById("task-submit").click();
//   }
// });

// const newTask = () => {
//     let inputValue = document.getElementById("task-input").value;
//     currentTasks.push(inputValue);
//     document.getElementById('task-input').value = '';
//     // console.log(currentTasks[currentTasks.length - 1])
//     let taskInHTML = '<div class="task"><p>' + inputValue + '</p></div>';

//     toDoDiv.insertAdjacentHTML('beforeend', taskInHTML);

//     document.querySelectorAll('.task').forEach(item => {
//         item.addEventListener('click', event => {
//             let taskDone = item.querySelector("p").textContent;
//             finishedTasks.push(taskDone);
//             item.remove();
            
//             let taskInHTML = '<div class="task"><p>' + taskDone + '</p></div>';

//             if(true) { 
//                 tasksDone.insertAdjacentHTML('beforeend', taskInHTML); 
//             }
            
//         })

//         console.log(item.querySelector('p').textContent)
//     })  
// }

// const doneTask = () => {
//     console.log(this.textContent);
//     // finishedTasks.push(taskDone);
//     // item.remove();

//     // let taskInHTML = '<div class="task"><p>' + taskDone + '</p></div>';

//     // tasksDone.insertAdjacentHTML('beforeend', taskInHTML);
// }




























// set home
function setHome() {
    hidePage();
    showPage(homeHTML);
    document.querySelector('.main-window').style.justifyContent = 'center';
    document.querySelector('.main-window').style.alignItems = 'center';
    document.querySelector('.home').style.display = 'flex';
    currentPage = '.home';
}

// set tasks
const setTasks = () => {
    hidePage();
    showPage(tasksHTML);
    // document.querySelector('.main-window').style.justifyContent = 'flex-start';
    // document.querySelector('.main-window').style.alignItems = 'stretch';
    currentPage = '.tasks';
    
}

// set notes
const setNotes = () => {
    hidePage();
    showPage(notesHTML);
    document.querySelector('.home').style.display = 'none';
    currentPage = '.set-notes';
}

// set calendar
const setCalendar = () => {
    hidePage();
    showPage(calendarHTML);
    document.querySelector('.home').style.display = 'none';
    currentPage = '.calendar';
}

// buttons listener
home.addEventListener('click', () => {
    setHome();
})

tasks.addEventListener('click', () => {
    setTasks();
})

notes.addEventListener('click', () => {
    setNotes();
})

calendar.addEventListener('click', () => {
    setCalendar();
})