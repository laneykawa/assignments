var submit = document.getElementById("submit");
var travelinfo = document.getElementById("travelinfo");
var form = document.getElementById("form");
var diet = [];

var formAlert = function (e){
    e.preventDefault();
    // query selector for all inputs of food 
    // filter through for those === .checked
    // store the array. join 
    (e.target.querySelectorAll("input[type=checkbox]:checked")).forEach(function(input){
        diet.push(input.value)
    });
    console.log(diet)

    alert("First Name: " + document.travelinfo.firstname.value + "\n"
    + "Last Name: " + document.travelinfo.lastname.value + "\n"
    + "Age: " + document.travelinfo.age.value + "\n"
    + "Gender: " + document.travelinfo.gender.value + "\n"
    + "Location: " + document.travelinfo.location.value +"\n" 
    + "Dietary Restrictions: " + diet.join(", ")
    )
};

form.addEventListener("submit", formAlert);