var readlineSync = require('readline-sync');

console.log("Welcome to Escape the Room, the goal is to \(obviously\) escape the room!")

var playerMove = readlineSync.question ("You are trying to escape, what is the first move you'd like to make? \n Enter Hole to put hand in hole \n Enter Key to find the key or \n Enter Open to open the door  \n")
console.log("You have selected " + playerMove)

// if output is hole you are dead
// if output is key you have a key but have not escaped
// with key now must select another option
// if door, you cannot proceed unless you have a key



var playEscapeRoom = function (playerMove){
    switch (playerMove){
        case "Hole":
            console.log("You just DIED! You put your hand in the poisoned hole!")
            break;
        case "Key":
            console.log("Congratuations you have a Key");
                var playerMove2 = readlineSync.question ("Now you must select again \n Enter Hole to put hand in hole or \n Enter Open to open the door \n");
                switch (playerMove2){
                    case "Hole":
                        console.log("You just DIED! You put your hand in the poisoned hole!")
                        break;
                    case "Open":
                        console.log("CONGRATULATIONS YOU HAVE ESCAPED!")
                        break;
                }
            break;
        case "Open":
            console.log("Cannot open until you have a Key");
                var playerMove3 = readlineSync.question ("You must select again \n Enter Hole to put hand in hole or \n Enter Key to find the key\n");
            switch (playerMove3){
                case "Hole":
                    console.log("You just DIED! You put your hand in the poisoned hole!")
                    break;
                case "Key":
                    console.log("Congratuations you have a Key")
                    var playerMove2 = readlineSync.question ("Now you must select again \n Enter Hole to put hand in hole or \n Enter Open to open the door \n");
                    switch (playerMove2){
                        case "Hole":
                            console.log("You just DIED! You put your hand in the poisoned hole!")
                            break;
                        case "Open":
                            console.log("CONGRATULATIONS YOU HAVE ESCAPED!")
                            break;
                        }
                    break;    
            break; 
            }
    }
}

playEscapeRoom(playerMove);