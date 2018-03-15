var readlineSync = require("readline-sync")

var userName = readlineSync.question ("May I have your name?\n"); 
console.log ("Hello "+ userName.toUpperCase() + "!");

// var favMusic = readlineSync.question ("What type of music do you like?\n");
// console.log("Oh, that's awesome that you like " + favMusic + "!");

var favGenre = readlineSync.question ("What is your favorite genre of music?\n");
console.log("I like " + favGenre + " too!");

var favSubGenre = readlineSync.question ("From that what is your favorite sub-genre??\n");
console.log("Oh, that's awesome that you like " + favSubGenre + "!");

console.log ("So a quick summary, you like " + favSubGenre.concat(favGenre) + ".");

var favBands = readlineSync.question ("What artists or bands do you like?\n");
console.log("Rad! That's cool that you like " + favBands + "!");

var favBandReasons = readlineSync.question ("What do you like most about them?\n");
console.log("That's interesting.");

var concertList = readlineSync.question ("How many live concerts have you gone to?\n");
console.log("Wow you've been to " + concertList + "!");

var favLyrics = readlineSync.question ("What song or lyrics were most impacting or your favorite of all time?\n");
console.log("Fun fact, that is " + favLyrics.length + " letters");

var favLyricsLength = function (favLyrics){
    if (favLyrics.length >=20){
    console.log (favLyrics.slice((favLyrics.length/2), favLyrics.length));
    }
}

favLyricsLength(favLyrics);

var getStarting = readlineSync.question ("What index to start lyrics?\n");
console.log("Great, we will start at " + getStarting);

var printAgain = function (favLyrics){
    console.log (favLyrics.slice(getStarting, favLyrics.Length))
}

printAgain(favLyrics);


