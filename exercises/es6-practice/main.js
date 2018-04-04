// change all the following vars to either const or let

// const name = 'John'  
// let age = 101  
// let pets = ["cat", "dog"]

// const petObjects = []

// for (let i = 0; i < pets.length; i++){  
//   const pet = {type: pets[i]}
//   if (pets[i] === "cat"){
//     const name = "fluffy"
//   } else {
//     const name = "spot"
//   }
//   pet.name = name
//   petObjects.push(pet)
// }

// Fat arrow functions.
// re-write this .map() using a fat arrow function:

// const vegetables = carrots.map(function(carrot){  
//   return {type: "carrot", name: carrot}
// })

const vegetable = carrots.map(carrot => {type: "carrot", name:carrot}); 

// console.log(vegetable)

// re-write this .filter() using a fat arrow function:

// friends = people.filter(function(person){  
//   return !!person.friendly
// })

const friends = people.filter(person => !person.friendly)

// re-write the following functions to be fat arrow functions:

// function doMathSum(a, b){  
//   return a + b
// }

const doMathSum = (a,b) => a + b

// var produceProduct = function(a, b){  
//   return a * b
// }

const productProduct = (a, b) => a * b

// write a functions that takes a firstName, a lastName, an age and returns a string like the following: 

let firstName = "Jane"; 
let lastName = "Doe";
let age = 100; 

console.log (`Hi ${firstName} ${lastName} how does it feel to be ${age}?`)

const dogs = animals.filter((animal)=>{  
  if (animal.type === "dog"){
    return true
  } else {
    return false
  }
})

const dogs = animals.filter(animal => animal.type === "dog" ? "This is a dog":"This is not a dog")


let location = "Hawaii"; 
let name = "Janice"; 

console.log( `Hi ${name} \nWelcome to ${location}. \nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.  
`)