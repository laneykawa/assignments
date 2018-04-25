import React from "react";
import Name from "./Name";

function List(props){
    const { people } = props
    const namesList = people.map((name, i) => <Name key={name.name + i} name={name}/>); 
    return (
        <ul>
            { namesList }
        </ul>
    )
}
export default List;