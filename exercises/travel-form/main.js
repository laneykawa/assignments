var submit = document.getElementById("submit")

var x = document.getElementById("location").selectedIndex;
var y = document.getElementById("location").options;

submit.addEventListener("click", function(e){
    alert("First Name: " + document.travelinfo.firstname.value + "\n"
    + "Last Name: " + document.travelinfo.lastname.value + "\n"
    + "Age: " + document.travelinfo.age.value + "\n"
    + "Gender: " + document.travelinfo.gender.value + "\n"
    + "Location: " + y[x].text + "\n" 
    + "Dietary Restrictions: "
    )
    }
)


// var locationSelection = []
// var location = document.getElementById("location");
// var hawaii = document.getElementById("hawaii");
// var france = document.getElementById("france");
// var japan = document.getElementById ("japan")

// location.addEventListener("input", locationFunction);

// location.addEventListener("change", locationFunction);{
//     locationSelection = event.target.value
//     console.log()
// }


// // listen to hear if box is checked
// // if checked store
// // take stored sting and pull into alert

// var foodSelected = [];
// var regular = document.getElementById("regular");
// var vegetarian = document.getElementById("vegetarian");
// var kosher = document.getElementById("kosher");
// var lactoseFree = document.getElementById ("LactoseFree")

// var dietaryRestrictions = function(event){
//     if (event.target.checked){
//         foodSelected.push(event.target.name){
//         } else {
//             var index = foodSelected.indexOf(event.target.name);
//             foodSelected
//         }

//     }
// }