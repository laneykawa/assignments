import React from "react";

function Person(props) {
    console.log(props);
    const { name, image } = props;
    return (
        <li>
            <h1>{ name }</h1>
            <h3>{ image }</h3>
        </li>
    )
}

export default Person;