import * as actionTypes from "../actionTypes";

const initialState = {
    matchesdocids: []
};

const matchesReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SETMATCHES:
            return{
                ...state,
                matchesdocids: [...action.matches]
            }
        default:
            return state
    }
}

export default matchesReducer;