// run loop to find jon
// run loop to print alphabet to upper case
// console.log the combination of the two


var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  
var output = [];

var getJonAlpha = function(people, alphabet){
    for (var i = 0; i < people.length; i++){
        if( people[i] === "Jon"){
            output.push(people[i]);
                for (var j = 0; j < alphabet.length; j++){
            output.push(alphabet[j].toUpperCase())
            }
        }
    }
    console.log(output)
}

getJonAlpha(people, alphabet);

//---------

// var getJohn = function(people){
//     for (var i = 0; i < people.length; i++){
//         if(people[i] === "Jon"){
//             output.push(people[i]);
//         }
//     }
// }

// getJohn(people)

// console.log(output)

// var alphabetFunction = function(alphabet){
//     for (var i = 0; i < alphabet.length; i++){
//         console.log(alphabet[i].toUpperCase())
//     }
// }

// alphabetFunction(alphabet);


