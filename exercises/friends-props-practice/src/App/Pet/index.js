import React from "react"; 

function Pet (props){
    const {name, breed} = props;
    return(
        <div>
            <h4>
                My animal's name is { name } who is a  { breed }.
            </h4>
        </div>
    )
}

export default Pet;