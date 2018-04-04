// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {
  console.log(...animals)
}; 

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");  
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Make a food object with the array names as properties using Object Literals:

const fruit = ["apple", "pear"];  
const sweets = ["cake", "pie"];  
const vegetables = ["carrit"];

const food = {fruit, sweets, vegetables}  

console.log (food)

// Use destructuring to fill in the blanks and use the property names as variables:

const vacation = {  
  location: "Burly Idaho",
  duration: "2 weeks"
};

const {location, duration} = vacation

console.log(`We're going to have a good time in ${location} for ${duration}`)  

// Use destructuring to make this code ES6:

// const [firstItem] = items 

// Write destructuring code to assign variables that will help us print the expected string. Also, change the string to be using Template literals:

const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const [firstFav, secondFav, thirdFav, fourthFav, fifthFav] = favoriteActivitiesInOrder

console.log(`My top three favorite activities are, ${firstFav} , ${secondFav} , and  ${thirdFav}`);  


// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in.

function combineAnimals(...arr) {  
  console.log(arr.reduce((total, subArr)=> total = [...total, ...subArr]));
}

const realAnimals = ["dog", "cat", "mouse"];  
const magicalAnimals = ["jackolope"];  
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 


// Try to make the following function more ES6xy:

function product(a, b, c, d, e) {  
  var numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

// const product = (a, b, c, d, e) => numbers.reduce((acc,number)=> acc *number, 1);

// Make the following function more ES6xy. Use at least both the rest and spread operators:

// function unshift(array, a, b, c, d, e) {  
//   console.log([a, b, c, d, e].concat(array));
// }

const array = [ 1, 2, 3, 4]

const unshift = (array, ...alphabet) => [...alphabet, ...array]

console.log(unshift(array, 2,3,4,5))


// function populatePeople(names){  
//   return names.map(function(name){
//       name = name.split(" ");
//       // your code
//       let [firstName, lastName] = name
//       return {
//           firstName: firstName,
//           lastName: lastName
//       }
// }
// }

const populatePeople = names => names.map(name => {
  name = name.split(" ") ;
  let [firstName, lastName] = name;
  return {
    firstName, 
    lastName
  }
});
      
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])) 

// people = [
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"}
// ];