var rs = require("readline-sync")

console.log ("Welcometo my game!");
var playerName = rs.question ("What is your Name?");

//while loop continues as long as my hp > 1, or wincon is not met

var player = {
    name: playerName,
    hp: 100,
    attack: undefined,
}

var Enemy = function(){
    this.attack = Math.floor(Math.random()*20)+10);
    this.hp = 50;
}

while(player.hp>0 && player.enemiesKilled < 3){
    
}
