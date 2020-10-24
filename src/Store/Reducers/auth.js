import * as actionTypes from "../actionTypes";

const InitialState = {
    user: null,
    err: null,
    docid: null
}

const authReducer = (state=InitialState,action)=>{
    switch(action.type){
        case actionTypes.SETDOCNUMBER:
            return{
                ...state,
                docid: action.docid
            }
        case actionTypes.AUTHSUCCESS:
            return{
                ...state,
                err: null,
                user: action.user
            };
        case actionTypes.AUHTFAILED:
            return{
                ...state,
                err: action.err,
                user: null
            }
        default: 
            return state
    }
}
export default authReducer;