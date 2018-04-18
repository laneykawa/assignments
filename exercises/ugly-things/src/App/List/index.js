import React from "react"; 
import { connect } from "react-redux"; 
import Item from "./Item/";
import {removeUgly} from "../../redux/ugly"

function List (props){
    const uglyComponents = props.data.map((image, i) => <Item key={image.imgurl +i}{...image}> )
    removeUgly = {props.removeUgly} index={i}</Item>
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return state.ugly; 
 }

export default connect (mapStateToProps,{})(List); 