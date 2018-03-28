// var body = document.getElementById("body")
// var button = document.getElementById("button");
var insertClicks = document.getElementById("insertClicks");

// listen for a click
// count click
// store in html
// store to lcoal storage

let count = localStorage.getItem("a") || 0;
insertClicks.innerHTML = count;

window.addEventListener("click", function(){
    count++ ;
    insertClicks.innerHTML = count;
    localStorage.setItem("a", count)
});

