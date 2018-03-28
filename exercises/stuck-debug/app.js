var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option ='undecided';

var playGame = function () {
  while (option !== true) {
    option = ask.keyInSelect(options, "What would you like to do today?:");
    if (options[option] === 'pick flowers') {
      console.log("You pick some flowers. You make a bouquet.");
    } else if (options[option] === 'shoot guns'){
      console.log("You shoot guns.");
    } else if (options[option] === 'fight bears'){
      console.log("You fought a bear and got beat up!");
    } else {console.log("Pick Again")}
  }
}

playGame();