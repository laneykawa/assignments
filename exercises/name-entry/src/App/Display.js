import React from "react"; 

import List from "./List"; 

function Display (props){
        const { handleChange, handleSubmit, inputs, people } = props; 
        const { name } = inputs; 
        return (
            <form onSubmit={handleSubmit}>
                <label>
                    <input name="name" type="text" placeholder="Type Name Here" value={name} onChange={handleChange}/>
                    {name.length ? <p>You're doing a great job!</p> : <p> Please enter your name.</p>}
                    <button>Submit</button>
                    <List people={people}></List>
                </label>
            </form>
        )
}

export default Display;