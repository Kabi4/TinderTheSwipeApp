import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import * as timeago from "timeago.js";
import "./ChatComponent.css"
const ChatComponent = forwardRef(({uid,message,timestamp,name,image,userid},ref) => {
    return (
        <div ref={ref} className={`chatcomponent ${uid===userid && "self"} `}>
            {uid!==userid?<Avatar src={image} alt={`${name}'s Image`} />:null}
            <div className="chatcomponent__info">
                <p>{message}</p>
            </div>
            <p className="chatcomponent__timestamp">{timestamp && timeago.format(new Date(timestamp.toDate()))}</p>
        </div>
    )
})

export default ChatComponent
