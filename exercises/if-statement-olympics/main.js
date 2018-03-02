// Preliminaries //

if (5>3){
    console.log("is greater than");
}
if ("cat".length === 3){
    console.log("is the length"); 
}

if  ("cat" === "dog"){
    console.log("same");
}else {
    console.log("not the same");
}



// Bronze Medal //

var person = {
    name: "Bobby", 
    age: 12
}

if (person.age >= 18 && person.name[0] === "B"){
    console.log(person.name + " is allwed to go to the movie");
}



// Silver Medal //

if (1 === "1"){
    console.log("strict");
}else if( 1 == "1"){
    console.log("loose or abstract");
}else {
    console.log("not equal at all");
}


if (1<=2 && 2===4){
    console.log("yes");
}

if (3*4>10 && 5+10>10){
    console.log("YES");
}



//Gold Medal //
var dog = "dog"
if (typeof dog === "string"){
    console.log("this is a string");
}

var booleanValue = true
if (booleanValue === true){
    console.log("this boolean is true");
}

if(typeof (elem) !== "undefined"){
    console.log ("defined")
}


console.log("a".charCodeAt(0));

if ("a".charCodeAt(0)>12){
    console.log("a is greater then five");
}

var myNum = 21; 
if (myNum % 2 === 0){
    console.log("Even");
}else {console.log("Odd")}