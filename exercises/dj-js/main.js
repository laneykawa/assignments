var button = document.getElementById ("button"); 

button.addEventListener("mouseover", function(){
    button.style.backgroundColor = "blue";
    }
);

button.addEventListener("mousedown", function(){
    button.style.backgroundColor = "red";
    }
);

button.addEventListener("mouseup", function(){
    button.style.backgroundColor = "yellow";
    }
);

button.addEventListener("dblclick", function(){
    button.style.backgroundColor = "green";
    }
);

button.addEventListener("wheel", function(){
    button.style.backgroundColor = "orange";
    }
);

var body = document.getElementById ("body"); 

body.addEventListener("keyup", function(e){
    console.log(e.which);
    if (e.which === 66){
        button.style.backgroundColor = "blue";
    }else if (e.which === 82){
        button.style.backgroundColor = "red"; 
    }else if (e.which === 89){
        button.style.backgroundColor = "yellow";
    }else if (e.which === 71){
        button.style.backgroundColor = "green";
    }else if (e.which === 79){
        button.style.backgroundColor = "orange"; 
    }
}); 