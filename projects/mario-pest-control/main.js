var price1 = 5;
var input1 = document.getElementById("input1");
var goombaTotPrice = document.getElementById("goombaTotPrice");

var price2 = 7;
var input2 = document.getElementById("input2");
var bobombsTotPrice = document.getElementById("bobombsTotPrice");

var price3 = 11;
var input3 = document.getElementById("input3");
var cheepcheepTotPrice = document.getElementById("cheepcheepTotPrice");

var output = document.getElementById("output");
var button = document.getElementById("button");

var multiply = function (x,y){
    return x * y
}


// var subTotals = function (){
//     goombaTotPrice.innerHTML = multiply (price1, input1.valueAsNumber || 0) + " Coins";
//     // bobombsTotPrice.innerHTML = multiply (price2, input2.valueAsNumber || 0) + " Coins";
//     // cheepcheepTotPrice.innerHTML = multiply (price3,input3.valueAsNumber || 0) + " Coins";
// }
// subtoTals();

// input1.addEventListener("input", function (e){
//     goombaTotPrice.innerHTML = multiply (price1, input1.valueAsNumber || 0) + " Coins";
//     }
// )

// input2.addEventListener("input", function (e){
//     bobombsTotPrice.innerHTML = multiply (price2, input2.valueAsNumber || 0) + " Coins";
//     }
// )

// input3.addEventListener("input", function (e){
//     cheepcheepTotPrice.innerHTML = multiply (price3,input3.valueAsNumber || 0) + " Coins";
//     }
// )

button.addEventListener("click", function(e){
    // if (i)
    console.log(input1.valueAsNumber);
    output.innerHTML = (
        (multiply (price1, input1.valueAsNumber || 0)) + 
        (multiply (price2, input2.valueAsNumber || 0)) + 
        (multiply (price3,input3.valueAsNumber || 0)) + " Coins"
    )
    }
)
