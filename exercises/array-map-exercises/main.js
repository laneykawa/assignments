// 1) Make an array of numbers that are doubles of the first array

var arr = [2, 5, 100];

var doubleNumbers = function(arr){
    arr.map(function(num){
    return num*2
    }
    )
}

console.log(doubleNumbers(arr));

var numbers = [2, 5, 100]; 

var doubles = numbers.map(function (num){
    console.log(num * 2); 
});

var doubleNumbers = function(arr){
    arr.map(function (num){
        console.log(num *2)
    })
};

doubleNumbers(arr);

//2) Take an array of numbers and make them strings

// function stringItUp(arr){
//     arr.map(function(value){
//         console.log(value.toString())
//     }
// )};

// stringItUp([2, 5, 100]);

// var newArray = [];
// var stringItUp = function(arr){
//     arr.map(function(value){
//         console.log(value.toString())
//     });
// };

// stringItUp([2, 5, 100]);

// 3) Capitalize each of an array of names

// var toCaps = function (arr){
//     arr.map(function(str){
//         console.log(str.charAt(0).toUpperCase().concat(
//             str.toLowerCase().slice(1, str.length)));
//     });
// };

// toCaps(["john", "JACOB", "jinGleHeimer", "schmidt"])

// 4) Make an array of strings of the names

// var newNames = [];
// function namesOnlyFunction(arr){
//     arr.map(function(str){
//         newNames.push(str.name);
//         // console.log(str.name)
//     })
// }

// var namesOnly = [  
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// namesOnlyFunction(namesOnly);
// console.log(newNames);


// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
// var makeStrings = [  
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// var makeStringsFunction = function(arr){
//     arr.map(function(str){
//         if(str.age >=18){
//             console.log(str.name + " can go to the Matrix.");
//         }else {console.log(str.name + " is under age.")};
//     });
// };

// console.log(makeStringsFunction(makeStrings));

// 6) Make an array of the names in h1s, and the ages in h2s
// var theDOM = [  
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// function readyToPutInTheDOM(arr){
//     arr.map(function(str){
//         console.log ("<h1>" + str.name + "</h1>" + "<h2>" + str.age + "<h2>");
//     });
// };

// console.log (readyToPutInTheDOM(theDOM)); 
