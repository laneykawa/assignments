
function add(x,y){
    console.log (x+y);
}
add (2, 4);

function largest (a,b,c){
    console.log(Math.max(a,b,c));
}
largest (1,2,3);

var oddOrEven = function (x){
    if(x % 2===0) {
        console.log("even");
    }else {
        console.log("odd");
    }
}

oddOrEven(2);


var stringLength = function (string){
    if (string.length <= 20){
        console.log(string+string);
    }else {
        console.log(string.slice(0, string.length / 2));
    }
}

stringLength ("laneykawaguchiisawesome");


//Optional//
