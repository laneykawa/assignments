import axios from "axios";

// when making axios call to the marvel api, use this endpoint: axios.get("/api/marvel")

const initialState = {
    data: [],
    offset: 0,
    loading: true,
    errMsg: "",
    searchTerm: ""
}

const superHeroesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SEARCHTERM": 
            return {
                ... state, 
                searchTerm: action.searchTerm
            }
        case "GET_SUPERHEROES":
            return {
                ...state,
                offset: state.offset + 20,
                data: [...state.data, ...action.superheroes],
                loading: false,
            }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }
        default:
            return state;
    }
}

const marvelUrl = "/api/marvel?";

export const setSearchTerm = (e) => {
        return {
            type: "SET_SEARCHTERM",
            searchTerm: e.target.value
        }
    }

export const getSuperHeroes = (offset) => {
    return dispatch => {
        axios.get(marvelUrl + `offset=${offset}`)
            .then(response => {
                console.log(response.data.data.results);
                dispatch({
                    type: "GET_SUPERHEROES",
                    superheroes: response.data.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry, you're data is unavailable"
                });
            });
    }
}


export default superHeroesReducer;


