import React, { Component } from 'react'
import  REplayIcon from "@material-ui/icons/Replay";
import  CloseIcon from "@material-ui/icons/Close";
import  StarRateIcon from "@material-ui/icons/StarRate";
import  FavoriteIcon from "@material-ui/icons/Favorite";
import  FlashOnIcon from "@material-ui/icons/FlashOn";
import {IconButton} from "@material-ui/core";
import "./Footer.css"
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <IconButton><REplayIcon className="footer__repeat" fontSize="large"/></IconButton>
                <IconButton><CloseIcon className="footer__left" fontSize="large"/></IconButton>
                <IconButton><StarRateIcon className="footer__star" fontSize="large"/></IconButton>
                <IconButton><FavoriteIcon className="footer__right" fontSize="large"/></IconButton>
                <IconButton><FlashOnIcon className="footer__lighting" fontSize="large"/></IconButton>
            </div>
        )
    }
}

export default Footer;
