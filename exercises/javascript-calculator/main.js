var readlineSync = require("readline-sync") ;

var firstNumber = readlineSync.question ("Please enter your first number?\n");
console.log ("Great! You entered " + firstNumber + ".");

var secondNumber = readlineSync.question ("Please enter your second number.\n");
console.log ("You entered " + secondNumber + ".");

var operator = readlineSync.question ("Please enter the operation to perform: add, sub, mul, div.\n"); 
console.log ("Ok, we will " + operator + " " + firstNumber + " and " +secondNumber +".")


var operatorFunction = function (){
    switch (operator){
        case "add":
            console.log("The result is " + add(firstNumber, secondNumber));
            break;
        case "sub":
            console.log("The result is " + sub(firstNumber, secondNumber));
            break;
        case "mul":
            console.log("The result is " + mul(firstNumber, secondNumber));
            break;
        case "div":
            console.log("The result is " + div(firstNumber, secondNumber));
            break;
    }
}

var add = function (x,y){
    return (parseFloat(x) + parseFloat(y))
}

var sub = function (x,y){
    return (parseFloat(x) - parseFloat(y))
}

var mul = function (x,y){
    return (parseFloat(x) * parseFloat(y))
}

var div = function (x,y){
    return (parseFloat(x) / parseFloat(y))
}

console.log (operatorFunction(operator))