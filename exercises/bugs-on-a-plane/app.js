var form = document.getElementById("arline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;
var firstName = document.getElementsByName.first-name.value;
var lastName = document.getElementsByName.last-name.value;
var age = document.getElementsByName.age.value;
var gender = document.getElementsByName.gender.value;
var location = document.getElementsByName.location.value;
var diet = [];

function formAlert() {
    if (document.getElementsByName.diet.value.checked = "vegan") {
        diet.push(document.getElementById("vegan").value);
    }
    else if (document.getElementsByName.diet.value.checked = "gluten-free" ) {
        diet.push(document.getElementById('gluten').value);
    }
    else if (document.getElementsByName.diet.value.checked = "gluten-free") {
        diet.push(document.getElementById('paleo').value);
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

submit.addEventListener("click", formAlert);

