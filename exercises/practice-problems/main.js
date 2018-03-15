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
// print numbers

var averageArray = function (arr){
    for (var i = 0; i < arr.lenth; i++){
        console.log(arr.reduce(function(arr.length, 0,))
    }
}

averageArray([1, 2, 3]);