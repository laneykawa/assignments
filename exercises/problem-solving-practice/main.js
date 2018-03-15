//Write a function that takes an array of numbers and returns the largest (without using Math.max())
// take an array and sort array smallest to largest
// take last index (largest number) and return that

//long version
// arr = [40, 100, 1, 5, 25, 10];
// var compareFunction = function (a,b){
//     return a-b
// }
// arr.sort(compareFunction);
// console.log(arr);
// console.log(arr[arr.length-1]);

//short version
var getMax = function (arr){
    arr.sort(function compareFunction(a,b){
        return a-b;
    });
    console.log(arr[arr.length-1]);
}

getMax([40, 100, 1, 5, 25, 10]);


//Write a function that takes an array of words and a character and return each word that has that letter present.

// loop through array on each word
// 
// loop through each word for the letter
//return word that contains letter

// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") 
// => ["C%4!", "Hey!"]  

var getWords = function (arr, letter){
    for (var i = 0; i < arr.length; i++){
        if (arr[i].includes(letter)){
            console.log (arr[i]);
        }
    }
}

getWords(["#3", "$$$", "C%4!", "Hey!"],"!");

//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
// take number 1 and divide by number 2
//if R = 0 then console log true

var getIfDivisible = function (num1, num2){
    if (num1 % num2 === 0){
        console.log(true);
        } else {console.log(false);
    }
}

getIfDivisible(15,4);