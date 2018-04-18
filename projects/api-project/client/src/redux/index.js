import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import superHeroesReducer from "./superheroes.js";

const store = createStore(combineReducers({ superheroes: superHeroesReducer }), applyMiddleware(thunk));

// store.subscribe(() => console.log(store.getState()));

export default store;