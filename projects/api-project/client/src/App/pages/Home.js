import React from "react"; 
import List from "../List";

import {connect} from "react-redux";

import { setSearchTerm } from "../../redux/superheroes.js";

// value 
// state

// input trigger onChange function//

// Set initial state for input

// const initialState = {
//     data: [],
//     offset: 0,
//     loading: true,
//     errMsg: "",
//     searchTerm: ""
// }

function Home(props){
    const { searchTerm, setSearchTerm } = props
    console.log(props);
    
    // const target = e.target; 
    // const value = target.value
    return (
        <div>
            <h1>This is my awesome home page of SUPERHEROES</h1>
            <p>Begin typing the name of the superhero you want to find:</p>
            <div className="inputs">
                <input onChange={setSearchTerm} value={searchTerm}type="text" placeholder="Name of Superhero"/>
            </div>
            <List></List>  
        </div>
    )
}

const mapStateToProps = state => {
    return state.superheroes;
}

export default connect(mapStateToProps, {setSearchTerm})(Home); 