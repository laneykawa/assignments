var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

// Remove the last item from the vegetable array.

var removeLast = function (){
    return vegetables.pop();
}

console.log(removeLast());
console.log(vegetables);

// Remove the first item from the fruit array.

var removeFirst = function (){
    return fruit.shift();
}

console.log(removeFirst());
console.log(fruit);

// Find the index of "orange."

var findIndex = function (){
    return fruit.indexOf("orange");
}

console.log(findIndex());

// Add that number to the end of the fruit array.

var addFunction = function (){
    return fruit.push("1");
}

console.log(addFunction ());
console.log(fruit);

// Use the length property to find the length of the vegetable array. Log that to the console.

var lengthFunction = function (){
    return vegetables.length
}

console.log(lengthFunction());

// Add that number to the end of the vegetable array.

var addVeggieNumber = function (){
    return vegetables.push("3");
}

console.log(addVeggieNumber());
console.log(vegetables);

// Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = []
var newArray = function(){
    food = fruit.concat(vegetables);
    return food
}

newArray();
console.log(food)

// Remove 2 elements from your new array starting at index 4 with one method.

var removeElements = function (){
    return food.splice(4,2);
}
removeElements ();
console.log(food);

// Reverse your array.

var reverseFunction = function (){
    return food.reverse();
}
reverseFunction ();
console.log(food);

//Join

var joinFunction = function (){
    return food.join(",");
}
console.log(joinFunction(food));
