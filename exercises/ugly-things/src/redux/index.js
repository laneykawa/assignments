import {createStore, combineReducers} from "redux"; 

import uglyReducer from "./ugly"

const store = createStore (combineReducers({ugly : uglyReducer})); 

store.subscribe (()=>{
    console.log(store.getState())
});

export default store; 
