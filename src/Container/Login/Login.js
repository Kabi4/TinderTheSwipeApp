import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import "./Login.css";
import * as actionCreators from "../../Store/ActionCreator/index";
import Logo from "../../Assets/LOGOLOGIN.png"
class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login__container">
                    <img alt="LOGIN" className="login__image" src={Logo}/>
                    <h2>Welcome To Tinder,</h2>
                    <Button onClick={()=>{this.props.authenticate()}}>Sign In With Google</Button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        authenticate: ()=>{dispatch(actionCreators.startAuth())}
    }
}

export default connect(null,mapDispatchToProps)(Login);