import {createStore} from "redux"; 

function addItem(){
    return {
        type: "ADD_ITEM", 
    }
}

export default createStore();
