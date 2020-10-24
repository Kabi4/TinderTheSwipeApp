import React, { Component } from "react";
import "./Header.css";
import Logo from "../../Assets/Logo.png";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { Avatar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <IconButton>
          {this.props.user.photoURL?<Avatar src={this.props.user.photoURL} alt="UserAvatar" />:<PersonIcon />}
        </IconButton>
        <img src={Logo} alt="Logo" />
        <Link to={`/${this.props.user.uid}`}>
        <IconButton>
          <ForumIcon />
        </IconButton>
        </Link>
      </div>
    );
  }
};

const mapStateToProps = (state)=>{
  return{
    user: state.auth.user
  }
}

export default connect(mapStateToProps,null)(Header);
