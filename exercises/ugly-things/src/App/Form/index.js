import React, { Component } from "react";
import { connect } from "react-redux"; 
import { addUgly } from "../../redux/ugly.js"

class Form extends Component {
    constructor (props){
        super(props); 
        this.initialState =  {
            inputs: {
                imgURL: "", 
                title: "", 
                descripton: ""
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind (this)
        this.handleSubmit = this.handleSubmit.bind (this)
    }

        handleChange(e){
            const { name, value } = e.target; 
            this.setState(prevState =>{
                return {
                    inputs: {
                       ...prevState.inputs,
                       [name]:value
                    }
                }
            })
        }

        handleSubmit(e){
            e.preventDefault(); 
            // must dispatch and action which contains a type "ADD_UGLY" and the actual input data
            this.props.addUgly(this.state.inputs);
            this.setState(this.initialState)
        }

        render(){
        const {imgUrl, title, description} = this.state;
        return (
            <form action="">
                <input name="title" value={title} type="text" placeholder="Enter Title"/>
                <input name="imgUrl" value={imgUrl} type="text" placeholder="Img URL"/>
                <input name="description" value={description} placeholder="description" type="text"/>
                <button onSubmit={this.submit}>Submit</button>
            </form>
        )
    }
}

export default connect(null, { addUgly }) (Form);
