var reverseStr = function(str) {
    console.log(str.split('').reverse().join(""));
};

reverseStr("reVerse");

//need to fix, this is not working//
var getIfNumber = function (str){
    if(str == "number"){
        console.log(true);
    }else {console.log(false)}
};

getIfNumber(3);

var getEven = function (num){
    if (num % 2 === 0){
        console.log(true);
    } else {console.log(false)}
}

getEven(4);

// 4) Make a function that takes an array and returns the average of the array.
// take array numbers and add each one
// loop through 
// add i++ etc
// divide by total

const arr = [1, 2, 3]; 

// var averageArray = function (arr){
//     arr.reduce(function (total, amount){
//         return total + amount; 
//     }, 0);
// };

const aveArray = function(arr){
    arr.reduce(function(a,b){
        return a+b
    },0);
};
console.log (aveArray(arr))

const averageArray = arr.reduce(function (a, b){ return a+b }, 0);
console.log(averageArray);




// 5) Make a function that takes two arrays and returns a single array of the items from the arrays added alternatingly.


