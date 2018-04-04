import React from "react"; 
import Pet from "../Pet/"

function Friend (props){
    const {name, age , pets} = props; 
    const petLis = pets.map((pet, i) => <Pet key={pet.name + i} { ...pet}/>)
    console.log(props)


    return (
        <div>
            <h1> Owner Name: { name } </h1>
            <h3> Owner Age: { age }</h3>
            {petLis}
            <hr/>
        </div>
    )
}

export default Friend; 