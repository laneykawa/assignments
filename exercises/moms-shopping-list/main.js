// collect information
// submit
// print to list
// delete list if you push button removed

// ----------

var ul = document.getElementById("unordered");
var add = document.getElementById("add");
var input = document.getElementById("input");


add.addEventListener("click", function () {
    if (input.value === "") {
        alert("You must enter something.");
    } else {
        var list = document.createElement("LI");
        list.id = "listid"
        var button = document.createElement("BUTTON");
        button.id = "test"
        var inputtext = document.createTextNode(input.value);
        var text = document.createTextNode(" \u00D7");
        button.appendChild(text);
        list.appendChild(inputtext);
        list.appendChild(button);
        button.addEventListener("click", function () {
            // list.removeChild(button);
            // list.removeChild(inputtext);
            list.remove();
        });
    }
    input.value = "";
    ul.appendChild(list);
});
