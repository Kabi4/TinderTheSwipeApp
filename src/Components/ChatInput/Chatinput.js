import { IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import "./Chatinput.css"
import SendIcon from '@material-ui/icons/Send';
const Chatinput = () => {
    const [message,setmessage] = useState("");
    return (
        <form  className="message__input" onSubmit={(e)=>{e.preventDefault()}}>
            <input  value={message} onChange={(e)=>{setmessage(e.target.value)}} placeholder="Type a Message" />
            <IconButton ><SendIcon/></IconButton>
        </form>
    )
}

export default Chatinput
