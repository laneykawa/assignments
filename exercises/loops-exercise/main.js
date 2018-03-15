var strFunction = function (str){
    for (var i = 0; i < str.length; i++){
    console.log(str[i]);
    }
}
console.log(strFunction("test"));


var getCharacter = function (str, char){
    for (var i = 0; i < str.length; i++){
        if(str[i] === char) {
            console.log(i);
            return
        } 
    }
    console.log("character not found")
}

getCharacter("test","s");


var arr = ["3", "4", "0"]

var matchNumber = function (arr){
    for (var i = 0; i < arr.length; i++){
        if(arr[i] === "42"){
            return
        }
    }
    console.log ("42 not found")
}

matchNumber(arr);


var arrTable = ["5", "4", "3", "4"]

var getSmallestNumber = function (arr){
    arr.sort(function(a, b){return a-b})
    console.log(arr[0]);
};

getSmallestNumber(arrTable);;