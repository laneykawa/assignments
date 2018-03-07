var form = document.getElementById ("submit")
var input = document.getElementById ("input")
var p = document.getElementById ("output")


form.addEventListener("submit",function(event)){
    // if (event.target.name ---"login"){
    //     link me to profile page
    var input = event.target.children[0];
    if (input.value.length <6){
        alert("username must contain more characters");
    } else (
        p.innerHTML = input.value 
        input.value = ""
    )
}


//     event.preventDefault
//     p.innerHTML = input.output
//     input value = "";
// }
// }
