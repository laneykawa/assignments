import React from "react"; 

const button = document.getElementById("button")
button.addEventListener("click", (e) => {
    
})

function Item (){
    return(
        <div>
            <form id="form">
                <input id="title" placeholder="Title" type="text"/>
                <input id="description" placeholder="Description" type="text"/>
                <input id="imgUrl" placeholder="imgUrl" type="text"/>
                <button id="button"> Submit </button>
            </form>
        </div>
    )
}

export default Item; 