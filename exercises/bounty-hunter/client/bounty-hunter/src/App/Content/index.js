import React from "react";

const { firstName, lastName, living, bounty, type} = props

function Content (props){
    return (
        <div>
            <h1>{firstName} {lastName}</h1>
            <p>{ living } </p>
            <p>{ bounty } </p>
            <p>{ type } </p>
        </div>
    )
}

export default Content; 