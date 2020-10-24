import { IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import "./Chatinput.css"
import SendIcon from '@material-ui/icons/Send';
import { connect } from 'react-redux';
import firebase from "firebase"
import db from '../../Firebase/firebase';
const Chatinput = (props) => {
    const [message,setmessage] = useState("");
    const sendMessages = ()=>{
        db.collection("users")
        .doc(this.props.userdocid)
        .collection("matches")
        .doc(props.id)
        .collection("messages")
        .add({
            content: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            uid: props.user.uid,
            image: props.user.photoURL,
            name: props.user.displayName
        })
        .catch(err=>{
            alert(err.message)
            setmessage("");
        });
        db.collection("users")
        .doc(this.props.userdocid)
        .collection("matches")
        .doc(props.id)
        .collection("messages")
        .add({
            content: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            uid: props.user.uid,
            image: props.user.photoURL,
            name: props.user.displayName
        })
        .then(res=>{
            setmessage("");
        })
        .catch(err=>{
            alert(err.message)
            setmessage("");
        });
        
    }
    return (
        <form  className="message__input" onSubmit={(e)=>{e.preventDefault();sendMessages()}}>
            <input  value={message} onChange={(e)=>{setmessage(e.target.value)}} placeholder="Type a Message" />
            <IconButton ><SendIcon/></IconButton>
        </form>
    )
}

const mapStateToProps = (state)=>{
    return{
      userdocid: state.auth.docid,
      user: state.auth.user,
      matches: state.matches.matchesdocids
    }
}

export default connect()(Chatinput);
