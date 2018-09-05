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
    
    
    //Fonction pour naviguer du menu à la sectino désirée
    ScrollToSection = (e) =>
    {
        let section = document.getElementById(e.target.getAttribute("data-scroll"));
        section.scrollIntoView({block : "start" , behavior: "smooth"});
        this.CloseMenu();
    }
    
    CloseMenu = () =>
    {
        let navbar = document.getElementById("navbar");
        let navIcon = document.getElementById("navIcon");
        
        navbar.style.transform = "translateX(-100%)";
        navIcon.classList.add("bars");
        navIcon.classList.remove("close");  
    }
    
    render(){
    return(
    <div id="navbar" styleName="nav-container" style={{transform: `translateX(-100%)`}}>
        <div styleName="nav">
            <div styleName="nav-logo">
                <img alt="" className="img-fluid" src="/img/personnalLogoWhite.png" />
            </div>
            <div onClick={this.ScrollToSection} data-scroll="about" styleName="nav-item">À propos</div>
            <div onClick={this.ScrollToSection} data-scroll="portfolio" styleName="nav-item">Portfolio</div>
            <div onClick={this.ScrollToSection} data-scroll="contact" styleName="nav-item">Contact</div>
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