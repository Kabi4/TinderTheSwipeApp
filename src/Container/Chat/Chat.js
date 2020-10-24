import React, { Component } from 'react'
import ChatComponent from '../../Components/ChatComponent/ChatComponent'
import "./Chat.css"
import FlipMove from "react-flip-move";
import db from '../../Firebase/firebase';
import { connect } from 'react-redux';
import Chatinput from '../../Components/ChatInput/Chatinput';
class Chat extends Component {
    state = {
        messages: []
    }
    componentDidMount(){
        db.collection("users")
        .doc(this.props.userdocid)
        .collection("matches")
        .doc(this.props.id)
        .collection("messages")
        .onSnapshot(onSnapshot=>{
            this.setState({messages: onSnapshot.docs.map(ele=>{
                return{
                    id: ele.id,
                    data: ele.data()
                }
            })})
        })
    }
    render() {
        return (
            <div clasName="chat">
                <h2 style={{color: "gray",textAlign: "center"}}>{`You matched with ${"USENAME"} On ${"DATE"}`}</h2>
                <FlipMove>
                {this.state
                .messages
                .length>0
                ?
                this.state.messages.map(ele=>{
                    return <ChatComponent key={ele.id} uid="uid" message={ele.data.message} timestamp={ele.data.timestamp} name={ele.data.name} image={ele.data.image} userid={ele.data.userid}/>
                })
            :
            <h2  style={{color: "gray",textAlign: "center"}} >Start Talking To view messages</h2>}
                </FlipMove>
                <Chatinput id={this.props.id} />
            </div>
        )
    }
};

const mapStateToProps = (state)=>{
    return{
      userdocid: state.auth.docid
    }
}

export default connect(mapStateToProps,null)(Chat);