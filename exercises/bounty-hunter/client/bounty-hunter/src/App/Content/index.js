import React from "react";
import store from "../../redux/bounties"

function Content (props){
    const { firstName, lastName, living, bounty, type} = props
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