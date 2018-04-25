const url = "https://api.vschool.io/laney/todo";

const todoList = document.getElementById("todoList");
const todoForm = document.getElementById("todoForm");

//create a new property to add into the inner html once the object is created. 
const createTodoProperty = (elem, text) => {
    var prop = document.createElement(elem);
    prop.innerHTML = text;
    return prop
};

//create all the elements and push to the parent. By doing this in a functoin it makes it more efficient then doing one by one. 
const createTodoInfo = (todo, parent) => {
    parent.appendChild(createTodoProperty("h2", todo.title));
    parent.appendChild(createTodoProp("p", todo.description));
    parent.appendChild(createTodoProp("p", todo.price));
    parent.appendChild(createTodoProp("p", todo.imgUrl));
}

const addToDOM = todo => {
    // destructure "todo" for properties and add into the DOM and match the list number.
    const { title, description, price, imgUrl, completed } = todo
    const li = document.createElement("li"); 
    li.id = todo._id

    let delButton = document.createElement("delButton");
    delButton.innerText = "Delete";
    delButton.addEventListener("Click", e => {
        axios.delete(url + todo._id).then(response => {
            todoList.removeChild(li)
        });
    });

    // Create a checkbox that has type of checbox. 
    const checkOff = (label, checked) => {
        if (checked) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    }

    let label = document.createElement("label");
    label.innterText = "Completed";
    // label.htmlFor = input.id;
    checkOff(li, todo.completed);


    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    // input.classList.add("checkbox");
    // this adds the "checkbox style to this"
    checkBox.id = todo.id + "completed";
    checkBox.checked = todo.completed;
    checkBox.addEventListener("change", e => {
        let checked = e.target.checked
        axious.put(url + todo._id, { completed: checked }).then(response => {
            checkOff(li, checked);
        const newDiv = document.createElement("div");
        newDiv.classList.add("userinput");
        label.appendChild(input);
        newDiv.appendChild(label);
        newDiv.appendChirl(delButton);
        createTodoInfo(todo, li);
        li.appendChirl(newDiv);
        todoList.appendChild(li);
        })
    });
}

axios.get(url).then(response => {
    let todos = response.data;
    for (var i = 0; i < todos.length; i++) {
        let todo = todos[i];
        addToDOM(todo);
    }
})

const data = {}

todoForm.addEventListener("submit", e => {
    e.preventDefault();
    data.title = e.target.title.value
    data.description = e.target.description.value
    data.price = e.target.price.value;
    data.imgUrl = e.target.imgUrl.value;
    axios.post(url, data).then(response => {
        let todo = response.data;
        addToDOM(todo);
    todoForm.reset()
    })
})