// Preliminaries

// for (var i = 0; i < 10; i++){
//     console.log (i)
// }

// for (var i = 9; i > 0; i--){
//     console.log (i)
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (var i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }



// Bronze Medal
// var array = []
// for (var i = 0; i < 10; i++){
//     array.push(i)
// }
// console.log(array)

// for (var i = 0; i < 101; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var array = []
// for (var i = 0; i < fruit.length; i++){
//     if(i % 2 == 0){
//        array.push(fruit[i])
//     }
// }
// console.log(array)


// Silver Medal

// var peopleArray = [  
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]


// // for (var i = 0; i < peopleArray.length; i++){
// //     console.log(peopleArray[i].name);
// // // }

// // var names = []
// // var occupations = []

// // // for (var i = 0; i < peopleArray.length; i++){
// // //       names.push(peopleArray[i].name);
// // // }
// // // console.log(names)

// // for (var i = 0; i < peopleArray.length; i++){
// //     occupations.push(peopleArray[i].occupation);
// // }
// // console.log(occupations)

// var everyOtherName = []
// var everyOtherOccupation = []

// // for (var i = 0; i < peopleArray.length; i++){
// //     if (i % 2 === 0){
// //     everyOtherOccupation.push(peopleArray[i].occupation);
// //     }
// // }
// // console.log(everyOtherOccupation)

// // for (var i = 0; i < peopleArray.length; i++){
// //     if (i % 2 === 0){
// //     everyOtherName.push(peopleArray[i].name);
// //     }
// // }
// // console.log(everyOtherName)


// for (var i = 0; i < peopleArray.length; i++){
//     if (i % 2 === 0){
//     everyOtherName.push(peopleArray[i].name);
//     } else {everyOtherOccupation.push(peopleArray[i].occupation)
//     }
// }
// console.log(everyOtherName)
// console.log(everyOtherOccupation)



// Gold Medal


// for (var i = 0; i < 3; i++){
//     array.push(i)
// }
// console.log(array)

// for (var i = 0; i < 3; i++){
//     array2.push(array)
// }
// console.log(array2)

// var output = []; 
// for (var i = 0; i < 3; i++){
//     output.push([]);
//     for (var j = 0; j < 3; j++){
//         output[i].push(i);
//     }
// }
// console.log(output);


var array = []
var array2 = []
for (var i = 0; i < 3; i++){
    array.push("x")
}

for (var i = 0; i < 3; i++){
    array2.push(array)
}
console.log(array2)

