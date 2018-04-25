import thunk from "redux-thunk"
import { createStore, combineReducers, applyMiddleware } from "redux"; 

// need to create global state

import bountyReducer from "./bounties.js"

const globalState = {
    bounties : bountyReducer
}

// make store = global state and methods in that. 

const store = createStore(combineReducers(globalState), applyMiddleware(thunk)); 

export default store; 

