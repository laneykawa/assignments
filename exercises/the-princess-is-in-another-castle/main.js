class Player {
    constructor (){
        this.name = "",
        this.totalCoins = 0,
        this.status = "Big", 
        this.star = true,
        this.gameActive = true
    }
        setName() {
            if (Math.random() < .5){
                this.name = ("Mario"); 
                } else {this.name = "Luigi"}; 
        }  
        gotHit(){
            switch (this.status){
                case "Power Up": 
                    this.status = "Big"; 
                    break;
                case "Big": 
                    this.status = "Small"; 
                    break
                case "Small": 
                    this.status = "Dead"
            }
        }
        gotPowerUp(){
            switch (this.status){
                case this.status === "Small": 
                    this.status = "Big"; 
                    break;
                case this.status === "Big": 
                    this.status = "PowerUp"; 
                    break;
            }
        }
        gameActive() {
            if (this.status = "Dead"){
                this.gameActive = false; 
           } else {
                this.gameActive = true; 
            }
        }
        addCoin(){
            this.totalCoins += (Math.floor((Math.random() * 100) + 1))
        }
}

const newPlayer = new Player();
newPlayer.setName();
// newPlayer.gotHit();
// newPlayer.gotPowerUp(); 
newPlayer.addCoin(); 
newPlayer.gameActive;

const getRandom = () => {
    const getNumber =  Math.floor((Math.random() * 3) + 1)
    console.log (getNumber)
    switch(getNumber){
        case 1:
            newPlayer.gotHit();
            break

        case 2: 
            newPlayer.gotPowerUp; 
            break; 
        case 3: 
            newPlayer.addCoin;
    }
}

getRandom()

console.log(newPlayer)

const gamePlay = () => {
    while (newPlayer.status !== "Dead")
        getRandom ();
}




//MAPPED OUT FUNCTIONS & TESTED

// const setName = namePicked => {
//     if (Math.random() < .5){
//         return ("Mario"); 
//         } else {return "Luigi"}; 
//     }
// console.log(setName()); 

// const gotHit = () => {
//     if (Math.random() < .5){
//         return ("Got Hit");
//     } else {return "You are Safe."}
// }

// console.log (gotHit()); 

// const gotHit = () => {
//     switch (this.status)
//         case "Power Up":
//             this.status = "Big"
//             break
//         case "Big": 
//             this.status = "Small"
//             break
//         case "Small": 
//             this.status = "Dead"
// }


// const status = () => {
//     var random = Math.random(); 
//     if (random < .25){
//         return "Powered Up"; 
//     } else if (random >=.25 && random <.5){
//         return "Big"; 
//     } else if (random >= .5 && random < .75){
//         return "Small"; 
//     } else if (random >= .75) {
//         return "Dead"
//     }
// }

// console.log(status())

// const gameActive = () => {
//    if (this.status === "Dead"){
//         this.gameActive === false; 
//    } else {
//         this.gameActive === true; 
//     }
// }

// console.log(gameActive()); 

// const addCoin = () => {
//     return Math.floor((Math.random() * 100) + 1)
// }

// console.log(addCoin())

// const print = () => {
//     console.log (<li>this.name</li>
//         <li>this.status</li>)
// }
