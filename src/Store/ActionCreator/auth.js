import * as actionTypes from "../actionTypes";
import { auth, provider } from "../../Firebase/firebase";

const authSuccess = (user)=>{
    return{
        type: actionTypes.AUTHSUCCESS,
        user
    }
}

const authFailed = (err)=>{
    return{
        type: actionTypes.AUHTFAILED,
        err
    }
}

export const startAuth = ()=>{
    return dispatch=>{
        auth.signInWithPopup(provider)
        .then(res=>{
            dispatch(authSuccess(res.user));
            console.log(res)
        })
        .catch(err=>{
            dispatch(authFailed(err.message))
        })
    }
};

export const setdoc = (docid)=>{
    return{
        type: actionTypes.SETDOCNUMBER,
        docid
    }
}