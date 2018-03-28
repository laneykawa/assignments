// display all the todos from API
//Get them
const todoList = document.getElementById("todo")
const todoForm = document.getElementById("todoForm")

function deleteItem(id){
    axios.delete(`https://api.vschool.io/laney/todo/${id}`)
}

function markTodoCompleted(todo){
    axios.put(`https://api.vschool.io/laney/todo/${todo._id}`, {completed:!todo.completed} )
        // URL SAME 
        //body, completed true. Opposite of what it is nwo. 
        
}

function createTodoLi (todo){
    return `
    <li id="${todo._id}">
        <button onclick="deleteItem('${todo._id}')"> / </button>
        <input type=checkbox" onchange="markTodoCompleted(${todo._id})"/>
        <span>${todo.title}</span></li>`
}

axios.get("https://api.vschool.io/laney/todo").then(function(response){
response.data.forEach(function(todo){
    todoList.innerHTML += `
        <li id="${todo._id}">
        <button onclick="deleteItem('${todo._id}')"> X </button> 
        <span>${todo.title}</span></li>`
    });
});


todoForm.addEventListener("submit", function(e){
    event.preventDefault(); 
    const newToDoItem = {
        title: todoForm.title.value, 
        description: todoForm.description.value, 
        price: todoForm.price.value, 
    }
    axios.post("https://api.vschool.io/laney/todo", newToDoItem).then(function(response){
        //display on page
        todoList.innerHTML += `<li> ${response.data.title}</li>`
        // todoForm.title.value = "";
        // todoForm.description.value = "";
        // todoForm.price.value = "";
        todoForm.reset();
        todoForm.title.focus(); 
    })

//gather data from the input boxes (title, price, description) into an onject
// post data to server
//display the new todo on teh page
})
            // add a li to the todolist ul container
            // shoudl display the title of the todo
// inputs - add new todo items to list and server
// inpute for title, desc, price
//button - submit new to do and add to local list
    // shoudl be able to refresh and see new items
