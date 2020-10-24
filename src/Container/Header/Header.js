import React, { Component } from "react";
import "./Header.css";
import Logo from "../../Assets/Logo.png";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <IconButton>
          <PersonIcon />
        </IconButton>
        <img src={Logo} alt="Logo" />
        <Link to="/chats">
        <IconButton>
          <ForumIcon />
        </IconButton>
        </Link>
      </div>
    );
  }
}

export default Header;
