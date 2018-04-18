import React from "react"

function Superhero(props){
    const {superheroName, info, realName, powers, groupAffiliations, imgUrl} = props.hero
    const {handleClick} = props    
    
    return (
        <div onClick={(e) => handleClick(e, powers)}>
            <h1>{superheroName}</h1> 
            <p><strong>Super Hero Info: </strong>{info}</p>
            <img src={imgUrl} alt={superheroName}/>
            <p>Real Name:{realName}</p>
            <p>Group Affiliations: {groupAffiliations}</p>
            <hr/>
        </div>
    )
}

export default Superhero; 