import React, { Component } from 'react'
import ChatsPerson from '../../Components/ChatsPerson/ChatsPerson';
import "./Chats.css"
class Chats extends Component {
    state = {
        chats: []
    }
    render() {
        return (
            <div className="chats">
                {this.state.chats.length>0?this.state.chats.map(ele=>{
                return <ChatsPerson key={ele.id} name={ele.data.name} message={ele.data.name} uid={ele.data.uid} />
            }):<h2  style={{color: "gray",textAlign: "center"}}>:( No Prefect Match Till Far</h2>}
            </div>
        )
    }
}

export default Chats;