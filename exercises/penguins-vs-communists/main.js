// instatiate parties with class
// function to start game, random niumber between 1 & 2 to see what party attacks first. 

class Party {
    constructor (name) {
        this.partyName = name, 
        this.population = 1000000
    } 
}

// // create onMiss function
// const onMiss = (party) => {
//     console.log("The Penguins'nuke missed the Communists and instead landed in the ocean.")
// }

// create onHit function

// const onHit = (party) => {
//     const randPop = Math.floor((Math.random()*10000) +1)
//     console.log ("You have successfully attacked the other team")
//     this.population -= randPop
// }

// const isAttackSuccessful = () => {
//     const success = Math.floor(Math.random()); 
//     if (success < .5){
//         onHit()
//         console.log ("The attack was a success!!! ");
//     } else {
//         onMiss()
//         console.log("The attack missed!!");
//     }
// }

const sendNuke = (party, onHit = party => {console.log(party + " has successfully attacked the other team!!! ")}, onMiss = party => {console.log("The nuke missed and instead landed in the ocean.")}) => {
    const success = Math.random();
    console.log(success);
    if (success < .5){
        onHit();
        const randDam = Math.floor((Math.random()*10000) +1);
        party.population -= randDam; 
    } else {
        onMiss();
        return 0;
        party.population -= randDam;
        sendNuke(party);
    }
}


const  playGame = () => {
    const penguinParty = new Party ("Penguins"); 
    const communistParty = new Party ("Communists"); 
    console.log(penguinParty)
    console.log(communistParty)
    while (penguinParty.population > 0 && communistParty.population > 0){
        const random = Math.floor((Math.random()*2) +1)
        // console.log(random)
        if ( random === 1){
            console.log ("Penguins First")
            sendNuke(communistParty); 
            break
        } else {
            console.log("Communists First")
            sendNuke(penguinParty); 
            break
        }
    }
}

playGame();





