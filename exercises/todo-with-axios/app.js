const todoList = document.getElementById("todo"); 
const todoForm = document.getElementById("todoForm"); 

axios.get("https://api.vschool.io/laney/todo").then(function(response) {
    console.log(response.data);
    todoList.innerHTML += "<li>" + response.data[0].title + "</li>"
});

