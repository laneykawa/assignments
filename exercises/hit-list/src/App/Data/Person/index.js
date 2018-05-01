import React from "react";

function Person(props) {
    console.log(props);
    const { name, image } = props;
    return (
        <li className="li">
            <div className="div">
                <img className="img" src={image}></img>
                <h1>{ name }</h1>
            </div>
        </li>
    )
}

export default Person;