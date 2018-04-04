// 1) Turn an array of numbers into a total of all the numbers

function total(arr) {
    return arr.reduce(function (total, amount){
        return total + amount
    });
}

console.log(total([1,2,3])) // 6  

// 2) Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
    return arr.reduce(function(a, b){
        return a.concat(b)
    }, "")
}

console.log(stringConcat([1,2,3])) // "123"  

// 3) Turn an array of voter objects into a count of how many people voted

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function totalVotes(arr) {
    return arr.reduce(function(person){
        if (person.voted === true){
            return count++
        }
    }, 0);
};

console.log (totalVotes(voters))


// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(arr) {

}

console.log(shoppingSpree(wishlist)); 