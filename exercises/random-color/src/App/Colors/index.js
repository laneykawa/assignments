import React from "react"; 

class Colors extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            colors: [],
            errMsg: "",
            loading: true
        }
    }
}