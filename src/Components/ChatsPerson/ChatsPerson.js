import React, { useState } from 'react'
import "./ChatsPerson.css"
import { Avatar } from "@material-ui/core";
import { Link } from 'react-router-dom';
//import * as timeago from "timeago.js";
const ChatsPerson = ({name,photo,uid,userid}) => {
    
    return (
        <Link to={`/${uid}/${userid}`}>
            <div className="chatsPerson">
            <Avatar className="chatPerson__avatar" src={photo} alt={`${name}'s Avatar`} />
            <div className="chatsPerson__info">
                <h2>{name}</h2>
                <p>
                    "This is message"
                </p>
            </div>
            <p className="chatPerson__timestamp">Just Min ago</p>
        </div>
        </Link>
    )
}

export default ChatsPerson
