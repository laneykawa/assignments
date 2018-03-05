// .concat()

var stringFunction = function (str1, str2){
    console.log(str1.concat(str2))
}
stringFunction("hello ", "my name is Laney");


// .indexOf()
var indexFunction = function(str){
    console.log(str.indexOf("o"));
}
indexFunction("how are you today"); 


// .lastIndexOf()
var lastIndexFunction = function(str){
    console.log(str.lastIndexOf("o"));
}
lastIndexFunction("how are you today"); 


// .match()
var matchFunction = function(str){
    console.log(str.match("you"));
}
matchFunction("how are you today"); 


// .replace()
var replaceFunction = function (str){
    console.log(str.replace(str, "just replaced"));
}
replaceFunction ("how are you today");


// .slice()
var sliceFunction = function (str){
    console.log(str.slice(5,10));
}
sliceFunction ("how are you today");


// .split()
var splitFunction = function (str){
    console.log(str.split(" "));
}
splitFunction ("how are you today");


// .toLowerCase()
var toLowerCaseFunction = function (str){
    console.log(str.toLowerCase());
}
toLowerCaseFunction("How are you today");


// .toUpperCase()
var toUpperCaseFunction = function (str){
    console.log(str.toUpperCase());
}
toUpperCaseFunction("How are you today");


// .substr()
var substrFunction = function (str){
    console.log(str.substr(5,2));
}
substrFunction("How are you today");

var testBoth = function(str){
    console.log (str.toUpperCase .substr(2,2))
}

testBoth("how are you today?")