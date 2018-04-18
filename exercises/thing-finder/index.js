
const express = require("express"); 
const uuid = require ("uuid")
const bodyParser = require("body-parser")

const app = express()

let fruits = require ("./fruits.js"); 

const port = 8000

app.use(bodyParser.json());

app.route("/fruits")
    .get((request, response)=> {
        const { query } = request;
        const queriedFruits = fruits.filter(fruit => {
            for (let key in query){
                if (!fruit.hasOwnProperty(key) || String(fruit[key]).toLowerCase() !== query[key].toLowerCase()){
                    return false;
                }
            }
            return true
        })
        response.status(200).send(queriedFruits);
    })
    .post((request, response) => {
        console.log(request.body);
        const newFruit = request.body; 
        newFruit._id = uuid();
        fruits.push(newFruit);
        response.status(201).send(newFruit);
    })

app.route("/fruits/:id")
    .get((request, response) => {
        console.log(request.params.id)
        console.log(request.query)
        const { id } = request.params
        const foundFruit = fruits.filter(fruit => fruit._id === id); 
        response.status(200).send(foundFruit); 
    })
    .delete((request, response) => {
        const { id } = request.params; 
        fruits = fruits.filter(fruit => fruit._id !== id)
        response.status(204).send({ message:`${id} was successfully removed`})
    })
    .put((request, response) => {
        const { id } = request.params; 
        let editedFruit = request.body
        fruits = fruits.map(fruit => fruit._id === id ? editedFruit = {...fruit, ...editedFruit} : fruit); 
        response.status(200).send(editedFruit)
    })
  

app.listen(port, () => console.log("Server running on port " + port))