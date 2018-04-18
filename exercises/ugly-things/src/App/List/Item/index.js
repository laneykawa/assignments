import React from "react"; 

function Item (props){
    const {imgUrl, title, description} = props
    console.log(props)
    return (
        <div>
            <h1>{title}</h1>
            <button>X</button>
        </div>
    )
}

export default Item; 