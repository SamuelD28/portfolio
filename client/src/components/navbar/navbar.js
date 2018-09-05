import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './navbar.module.css';
import {Utility} from '../../shared/utility.js';

class Navbar extends Component
{
    componentDidMount()
    {
        let navbar = document.getElementById("navbar");
        Utility.AdjustFullHeight(navbar);
    }
    
    render(){
    return(
    <div id="navbar" styleName="nav-container">
        <div styleName="nav">
            <div styleName="nav-logo">
                <img alt="" className="img-fluid" src="/img/personnalLogoWhite.png" />
            </div>
            <div data-scroll="about" styleName="nav-item">À propos</div>
            <div data-scroll="portfolio" styleName="nav-item">Portfolio</div>
            <div data-scroll="contact" styleName="nav-item">Contact</div>
        </div>
        <div styleName="nav-social">
            <a><i styleName="nav-icon" className="icon github square"></i></a>
            <a><i styleName="nav-icon" className="icon facebook square"></i></a>
            <a><i styleName="nav-icon" className="icon twitter square"></i></a>
        </div>
    </div>
    )}    
}

export default CSSModules(Navbar, styles, {allowMultiple: true});