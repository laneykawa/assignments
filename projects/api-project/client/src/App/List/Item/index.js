import React from "react";

function Item (props) {
    const { name, description, thumbnail } = props;
    const imgStyle = {backgroundImage: `url(${thumbnail.path}.${thumbnail.extension})`}
    return (
        <div>
            <h1>{ name }</h1>
            <p>{ description }</p>
            <div className="superheroImg" style={imgStyle} alt={name}></div>
        </div>
    )
}
export default Item;