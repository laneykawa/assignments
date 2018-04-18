const express = require("express"); 
const uuid = require ("uuid");
const bodyParser = require("body-parser");

const app = express();

let todos = require ("./todos.js"); 
console.log(todos); 

const port = 8080 

app.use(bodyParser.json());

app.route("/todos")
    .get((request, response)=> {
        response.status(200).send(todos);
    })
    .post((request, response) => {
        const newTodo = request.body;
        newTodo._id = uuid();
        todos.push(newTodo);
        response.status(201).send(newTodo);
    })

app.route("/todos/:id")
    .get((request, response) => {
        const { id } = request.params
        const foundTodo = todos.filter(todo => todo._id === id); 
        response.status(200).send(foundTodo); 
    })
 
    .delete((request, response) => {
        const { id } = request.params; 
        todos = todos.filter(todo => todo._id !== id)
        response.status(204).send({ message:`${id} was successfully removed`})
    })

    .put((request, response) => {
        const { id } = request.params; 
        let editedTodo = request.body
        todos = todos.map(todo => todo._id === id ? editedTodo = {...todo, ...editedTodo} : todo); 
        response.status(200).send(editedTodo)
    })
  

app.listen(port, () => console.log("Server running on port " + port))
