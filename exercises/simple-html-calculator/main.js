//first number must be in
//second number must be in
//listen for push button event
//add number one + two
//log in output

// var addButton = document.getElementById("addButton");

var addButton = document.getElementById("addButton");
var subtractButton = document.getElementById("subtractButton");
var multiplyButton = document.getElementById("multiplyButton")
var inputOne = document.getElementById("inputOne")
var inputTwo = document.getElementById("inputTwo")
var outputAdd = document.getElementById ("outputAdd")
var inputThree = document.getElementById ("inputThree")
var inputFour = document.getElementById ("inputFour")
var outputSubtract = document.getElementById ("outputSubtract")
var inputFive = document.getElementById ("inputFive")
var inputSix = document.getElementById ("inputSix")
var outputMultiply = document.getElementById ("outputMultiply")



// -----------------

var add = function (x,y){
    return x + y;
}

addButton.addEventListener("click", function(e){
    outputAdd.innerHTML = add(inputOne.valueAsNumber, inputTwo.valueAsNumber);
})


var subtract = function (x, y){
    return x - y;
}

subtractButton.addEventListener("click", function(e){
    outputSubtract.innerHTML = subtract(inputThree.valueAsNumber, inputFour.valueAsNumber);
})


var multiply = function (x, y){
    return x * y;
}

multiplyButton.addEventListener("click", function(e){
    outputMultiply.innerHTML = multiply(inputFive.valueAsNumber, inputSix.valueAsNumber);
})




// var form = document.getElementById ("submit")
// var input = document.getElementById ("input")
// var p = document.getElementById ("output")


// form.addEventListener("submit",function(event)){
//     // if (event.target.name ---"login"){
//     //     link me to profile page
//     var input = event.target.children[0];
//     if (input.value.length <6){
//         alert("username must contain more characters");
//     } else (
//         p.innerHTML = input.value 
//         input.value = ""
//     )
// }


//     event.preventDefault
//     p.innerHTML = input.output
//     input value = "";
// }
// }
