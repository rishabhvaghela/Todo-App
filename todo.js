const todocontainer = document.querySelector('#todo-container');
const todoinput = document.getElementById('todo')


//! This sections is for adding an todo
let btn = document.getElementById('btn').addEventListener('click', () => {
   // check input value is null or not
    if (todoinput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }
    else {
        const todo = `<p class= "check"></p>${todoinput.value}<input type="button" value="Delete"
                        class="dlt-btn">`;
        const todoElement = document.createElement('li');
        todoElement.classList.add('todo-list');
        todoElement.innerHTML = todo;
        todocontainer.appendChild(todoElement);
        todoinput.value = '';
        storedata();
    }
});

//! Tish section is for delete and complete the todo
todocontainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dlt-btn')) {
        e.target.parentElement.remove();
        storedata();
    }
    else if (e.target.classList.contains('check')) {
        e.target.parentElement.classList.toggle('checked')
        e.target.classList.toggle('check-checked')
        storedata();
    }

})

//* storing the todos in localstorage
function storedata() {
    localStorage.setItem('todo', todocontainer.innerHTML);
}

//* render the stored data
function showdata() {
    todocontainer.innerHTML = localStorage.getItem('todo');
}

showdata();