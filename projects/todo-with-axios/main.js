let todoUrl = "https://api.vschool.io/laney/todo/";

let todoForm = document.getElementById("todoForm");
let todoList = document.getElementById("todoList");

// axios.get(todoUrl).then(function(response){
//     console.log(response)
//     response.data.forEach(function (todo){
//         todoList.innerHTML += "<li>" + todo.title + "</li>"
//     })
// });

// create property

function createTodoProperty(elem, text){
    var prop = document.createElement(elem); 
    prop.innerHTML = text; 
    return prop; 
}; 

// create element and description, push to parent
function createTodoInfo(todo, parent){
    parent.appendChild(createTodoProperty("h3", todo.title)); 
    parent.appendChild(createTodoProperty("p", todo.description)); 
    parent.appendChild(createTodoProperty("p", todo.price));
    parent.appendChild(createTodoProperty("img", todo.imgUrl));
}

// checked off label function

// DOM functions: 
function addToDom(todo){
// create list 
    const { title, description, price, _id, imgUrl, completed } = todo
    const li = document.createElement("li"); 
    li.id = todo._id; 

// create todo and push to list.

//delete button
let button = document.createElement("button"); 
    button.innerText = "Delete"; 

// listen if the delete button is selected
    button.addEventListener("click", function (e){
        axios.delete(todoUrl + todo._id).then(function (response){
            todoList.removeChild(li)
        });
    });
    
// create a checkbox
let input = document.createElement("input"); 
    input.type = "checkbox"; 
    input.classList.add("checkbox")
    input.id = todo.id + "completed";
    input.checked = todo.completed;
    
// create a lable to look for a status. 
let label = document.createElement("label"); 
    label.innerText = "Completed"; 
    label.htmlFor = input.id; 
    checkOff(li, todo.completed); 

input.addEventListener("change", function (e){
// just look for checked to destructure
let checked = e.target.checked; 
    axios.put(todoUrl+todo._id, {completed: checked}).then(function (response) {
        checkOff(li, checked);

//img push
// let img = document.createElement("img");
//     img.setAttribute("src", src)
//     img.setAttribute = todo.imgUrl;
//         }); 
//     }); 

const newDiv = document.createElement("div")
    newDiv.classList.add("userinput")
    label.appendChild(input)
    newDiv.appendChild(label)
    newDiv.appendChild(button)
    createTodoInfo(todo, li);
    // li.appendChild(img);
    li.appendChild(newDiv);
    todoList.appendChild(li);
};

function checkOff(label, checked){
    if (checked) {
        label.style.textDecoration = "line-through"; 
    } else{
        label.style.textDecoration = "none"; 
    }
}

axios.get(todoUrl).then(function (response){
    let todos = response.data; 
    for (var i = 0 ; i < todos.length; i++){
    let todo = todos[i]; 
    addToDom(todo);
    }
})

const inputData = {}; 

todoForm.addEventListener("submit", function (e){
    e.preventDefault(); 
    inputData.title = e.target.title.value
    inputData.description = e.target.description.value;
    inputData.price = e.target.price.value; 
    // inputData.img = e.target.img.value; 
    axios.post (todoUrl, inputData).then(function (response){
        let todo = response.data; 
        addToDom (todo); 
    todoForm.reset()
    }); 
}); 