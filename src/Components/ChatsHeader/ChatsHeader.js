import React from 'react';
import "./ChatsHeader.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import ForumIcon from "@material-ui/icons/Forum";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
const ChatsHeader = () => {
    return (
        <div className="chatHeader">
            <Link to="/">
            <IconButton>
            <ArrowBackIcon/>
            </IconButton>
        </Link >
        <img src={Logo} alt="Logo" />
        
        <IconButton>
          <ForumIcon />
        </IconButton>
        
        </div>
    )
};

export default ChatsHeader;
