import * as actionTypes from "../actionTypes";

export const setMatches = (matches)=>{
    return{
        type: actionTypes.SETMATCHES,
        matches: [...matches]
    }
};