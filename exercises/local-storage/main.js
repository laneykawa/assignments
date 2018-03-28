localStorage.setItem ("cart", JSON.stringify(cart));
console.log(JSON.parse(localStorage.getItem("cart")));

localStorage.setItem ("str", str);
//application --> storage --> session storate
var str = "I'm a string";

localStorage.setItem ("num", num);
var number = 10; 
cosole.log(sessionStorage.getItem("num"))

localStorage.setItem ("bool", bool);
var bool = true; 

localStorage.setItem ("obj", JSON.stringify(obj));
var obj = {
    key: "value", 
    method: function (){
        console.log("I'm a method")
    }
}
console.log(JSON.parse(localStorage.getItem("obj")));

var arr = [4, true, "yellow"]
localStorage.setItem ("arr", JSON.stringify(arr));

