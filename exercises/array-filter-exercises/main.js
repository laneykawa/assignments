// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.


let newArray = [];

function fiveAndGreaterOnly(arr) {
    arr.filter(function(num){
        if (num >= 5){
            newArray.push(num);
        };
    });
};

fiveAndGreaterOnly([3, 6, 8, 2]); /// [6, 8]  

console.log(newArray);

// 2) Given an array of numbers, return a new array that only includes the even numbers.

let array = []; 

function evensOnly(arr) {
    arr.filter(function(num){
        if (num % 2 === 0){
            array.push(num);
        };
    });
};

evensOnly([3, 6, 8, 2]); /// [6, 8, 2]  

console.log (array)

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
let newWords = [];

function fiveCharactersOrFewerOnly(arr) {
    arr.filter(function(word){
        if (word.length <= 5){
            newWords.push(word);
        };
    });
};

fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]) // ["by", "dog", "wolf", "eaten"]  

console.log(newWords)

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const members = [  
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]


let illuminati = []; 

function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(function(person){
        return person.member
    });
};

console.log(peopleWhoBelongToTheIlluminati(members).map(function(person){return person.name}));

// Convert to ES6


// 5) Filter out all the people who are not old enough to see The Matrix (younger than 18)

let listOfPeople = [  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

function ofAge(arr){
    return arr.filter(function(person){
        return person.age >= 18
    });
};

console.log(ofAge(listOfPeople).map(function(person){return person.name}));
