var readlineSync = require("readline-sync"); 

console.log("\nWelcome... to Jurassic Park!\n");

var playerName = readlineSync.question("What is your name?\n");
console.log("\nPleasure to meet you " + playerName + ". \n \nYou have just entered Jurassic park and have to watch out for dinosaurs!!! Stay alive by attacking or running from them. You will start with 500 hit points. With each dinosaur defeated, you will get additional hit points and inventory. To win the game you must kill 3 dinosaurs. If you run out of hit points, GAME OVER. \n\nTo begin, please start by selecting \"Walk\" from the options below.");

var playerStats = {
    name: playerName,
    hp: 500, 
    inventory: [],
    enemiesKilled: 0,
    };

// player must walk to begin and there is a chance of being attacked
    // if random odds for attack = attack
        //then dinosaur must be randomly generated
        //then player must decide to ATTACK or RUN
            //if player wants to ATTACK 

                // then player must then decide to Karate Chop (min points damage randomely between 0-50) or (super sumurai torando kick 70-100)
                    // if max power and attack then happens. Damage to enemy is removed
                        //if enemy hps <== 0 then "You Defeated Enemy One"
                            //you get hp of 100
                            //count enemy deaths
                            //get items of inventory
                            //continue "you've won and are back walking"
                    // if min power and attack then happens. Damage to enemy is removed
                        //if enemy hps <== 0 then "You Defeated Enemy One"
                            //you get hp of 100
                            //count enemy deaths
                            //get items of inventory
                            //continue "you've won and are back walking"
            //then enemy Attacks for random hps
                //then hps removed from player
                    //if hps <= 0 "you lose"

        
            //if player wants to RUN
                // then get's a randomenumber of escaping
                    //if player escapes then goes back to walking
                // attacked 
                    // run attack pattern
    // still walking and runs the loop again


// var attack = function (){
//     Dinosaur ();
//     var playOption2 = ["Attack", "Run"]
//     var playerMove = readlineSync.keyInSelect(playOption2, "You have been attacked, please select what you'd like to do.")
//     if (playOption2[playerMove] === "Attack"){
//             var fightOptions = ['Karate Chop', 'Tornado Kick', "Dino Body Slam"]  
//             var fightMoves = readlineSync.keyInSelect(fightOptions, "You are now under attack, please select which attack move you'd like to use from the above.")
//                 if (fightMoves[fightOptions] === "Karate Chop"){
//                     this.dinoHitPoints - (Math.floor(Math.random() * 21) + 80)
//                 } if (fightMoves[fightOptions]=== "Tornado Kick"){

//                 } if (fightMoves[fightOptions]=== "Dino Body Slam"){

//                 }
//     }else if( playOption2[playerMove] === "Run") {
//         if (Math.random()<=.5){
//             //run attack function
//         }
//     }

// }
// RANDOM DINO GENERATOR

var Dinosaur = function (){
    this.type = getRandomDino(); 
    this.hitPoints = this.genHitPoints();
    this.defense = this.hitPoints * 3; 
}

var getRandomDino = function (){
    var dinoTypes = ["Tyrannosaurus", "Velociraptor", "Spinosaurus"];
    var randIndex = Math.floor(Math.random()*dinoTypes.length);
    return dinoTypes[randIndex];
}

Dinosaur.prototype.genHitPoints = function () {
    switch (this.type) {
        case "Tyrannosaurus":
            return Math.floor(Math.random() * 21) + 80;
        case "Velociraptor":
            return Math.floor(Math.random() * 30) + 50;
        case "Spinosaurus":
            return Math.floor(Math.random() * 30) + 20;
    }
}

var Inventory = function (){
    this.type = getRandomInv(); 
}

var getRandomInv = function (){
    var inventoryTypes = ["Shotgun", "Machete", "Pistol", "Map", "Sword", "Machine Gun", "Flashlight", "Knife"];
    var randIndex = Math.floor(Math.random()*inventoryTypes.length);
    return (inventoryTypes[randIndex]);
}


var run = function (dino){
    if (Math.random()<=.5){
        console.log ("You were not able to escape and have taken an additional -20 hps for running. Now you will have to fight the dinosaur");
        var newStats = (playerStats.hp - 20); 
        attackSequence(dino);
    } else {
        console.log ("You have managed to escape and are resting in the Park, start walking when ready.");
    };
};

var attackSequence = function (dino){
    console.log(dino);
    while (dino.defense > 0){
        var attackPoints = Math.floor(Math.random() * 21) + 80;
        dino.defense -= attackPoints;
        console.log ("You have just run your attack, " + attackPoints + " hp points have been done to the dinosaur.");
        console.log ( "The " + dino.type + " has attacked back and has done damage to you by " + dino.hitPoints + " points.");
        playerStats.hp -= dino.hitPoints;
        if (dino.defense <= 0) {
            console.log("\nWahoo, you just defeated the " + dino.type + " and have earned 100+ hp and a")
            playerStats.enemiesKilled++;
            playerStats.hp += 100; 
            var inventory = new Inventory();
            console.log (inventory)
            playerStats.inventory.push(inventory.type);
            console.log("\nBefore you get ambushed by a pack of Velociraptors, hurry and begin walking again.")
        };

        if (playerStats.hp <= 0){
            break;
        };
    };
};

var playerChoice = function(dino){
    choiceOptions = ["Attack", "Run"]
    choice = readlineSync.keyInSelect(choiceOptions, "Select and option: ");
    if (choiceOptions[choice] === "Attack"){
        attackSequence(dino);
    } if(choiceOptions[choice] === "Run"){
        console.log ("Hold on to your butts, you've decided to make a run for it... Must go faster! Must go faster!");
        run(dino);
    };
};

var input = "undecided";
var playerOptions = ["Walk", "See Player Stats"]; 

var playGame = function (){
    while (playerStats.hp > 0){
        input = readlineSync.keyInSelect(playerOptions, "Please Select:");
        if (playerOptions[input] === "Walk"){
            if (Math.random() <=1){
                var dino = new Dinosaur();
                console.log ("You have encountered a " + dino.type + ". please choose if you'd like to attack or run.");
                playerChoice(dino);
                if (playerStats.enemiesKilled > 2){
                    console.log ("\n\nYou have just defeated 3 dinosaurs! Congratulations, you have survived Jurrassic Park! Enjoy your helicopter ride out. ");
                    break;
                }
            } else {
                console.log("You are still walking safely in the park. Please continue walking.");
            };
        }else if (playerOptions[input] === "See Player Stats"){
            console.log(playerStats);
        };
    };
};

playGame();

if (playerStats.hp > 0) {
    console.log("\nYou've WON!!! You Are Now Leaving Jurrasic Park!");
} else {
    console.log("\nYou have been killed in Jurrassic Park. GAME OVER.");
}; 


