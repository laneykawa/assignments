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

// submit.addEventListener("click", function(e){
//     var checkedGender = [];
//     var checkedGenBox = document.querySelectorAll("input[name=gender]:checked");
//     for (var i= 0; i <checkedGenBox.lenth; i++){
//     checkedGender.push(checkedGenBox[i].value);
// }
// console.log(checkedGender)
// }
// )

// var location = ""
// var locationFunction = function (){
//     if (document.travelinfo.location.checked === true){
//         location.push(document.travelinfo.location.checked)
//     }
// }

// locationFunction();


// listen to hear if box is checked
// if checked store
// take stored sting and pull into alert


