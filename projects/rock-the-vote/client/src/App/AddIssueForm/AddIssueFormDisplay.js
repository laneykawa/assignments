import React from "react"; 

function AddIssueFormDisplay(props) {
    const { handleChange, handleSubmit, inputs } = props; 
    const { title, description, img } = inputs; 
    return (
        <div className="display" >
            <div className="formDisplay">
            <form className="addForm"onSubmit={handleSubmit}>
                <input className="addInput" name="title" onChange={handleChange} value={title} type="text" placeholder="Enter Issue"/>
                <input className="addInput" name="description" onChange={handleChange} value={description} type="text" placeholder="Enter Description" />
                <br/>
                <button className="addButton" >Submit</button>
            </form>
            </div>
        </div>
    )
}

export default AddIssueFormDisplay; 