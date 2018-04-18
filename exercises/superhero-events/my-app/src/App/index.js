import React from "react"
import Superhero from "./Superhero";
import heroes from "./superheroes.json"

function App (){
    function handleClick(e, message) {
        e.preventDefault();
        alert(message); 
    }

    return (
    <div>
        {heroes.superheroes.map((hero, index) => <Superhero hero={hero} key={hero.superheroName + index}{...hero} handleClick={handleClick}/>)}
    </div>
    )
}

export default App; 
