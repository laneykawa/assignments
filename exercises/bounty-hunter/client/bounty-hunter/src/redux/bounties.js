// reducers are in this file

const initialBountyState = {
     data: [], 
     loading: true, 
     errMsg: ""
}

const bountyReducer = (state = initialBountyState, action) => {
    switch (action.type) {
        case "GET_BOUNTIES": {
            return {
                ...state, 
                loading: false, 
                data: action.cats
            }
        }
        default: 
            return state; 
      
    }
}


export const getBounties = () => {
    axios.get("/bounty.js") 
        .then (response => { 
            return {
                type: "GET_BOUNTIES",
                bounties: response.data
            }   
        })
        .catch(err => {
            return {
                type: "ERR_MSG", 
                err: "Data Unavailable"
            }
        })
}

export default bountyReducer

// what is thunk actually doing? 