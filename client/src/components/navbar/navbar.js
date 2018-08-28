import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './navbar.module.css';

class Navbar extends Component
{
    render(){
    return(
    <div id="nav-container" styleName="nav-container">
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