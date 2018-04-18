const initialState = {
    data: []
}

const uglyReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_UGLY": 
            return {
                data: [...state.data, action.ugly]
            }
        case " REMOVE_UGLY": 
            return {
                data: state.data.filter((obj, i) => i !== action.index)
            }
        default: 
            return state; 
    }
}

export const addUgly = ugly => {
    return {
        type: "ADD_UGLY",
        ugly
    }
}

export const removeUgly = index => {
    return {
        type: "REMOVE_UGLY", 
        index
    }
}

export default uglyReducer; 