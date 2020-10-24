import React, { Component } from 'react'
import ChatComponent from '../../Components/ChatComponent/ChatComponent'
import "./Chat.css"
class Chat extends Component {
    state = {
        messages: []
    }
    render() {
        return (
            <div clasName="chat">
                <h2 style={{color: "gray",textAlign: "center"}}>{`You matched with ${"USENAME"} On ${"DATE"}`}</h2>
                {this.state
                .messages
                .length>0
                ?
                this.state.messages.map(ele=>{
                    return <ChatComponent key={ele.id} uid="uid" message={ele.data.message} timestamp={ele.data.timestamp} name={ele.data.name} image={ele.data.image} userid={ele.data.userid}/>
                })
            :
            <h2  style={{color: "gray",textAlign: "center"}} >Start Talking To view messages</h2>}
            </div>
        )
    }
};

export default Chat;