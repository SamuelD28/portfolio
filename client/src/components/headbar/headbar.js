import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './headbar.module.css';

class Headbar extends Component{
    
    DisplayMenu(e)
    {
        let navbar = document.getElementById("navbar");
        
        if(navbar.style.transform === "translateX(-100%)")
        {
            navbar.style.transform = "translateX(0%)";
            e.target.children[0].classList.remove("bars");
            e.target.children[0].classList.add("close");
        }
        else 
        {
            navbar.style.transform = "translateX(-100%)";
            e.target.children[0].classList.add("bars");
            e.target.children[0].classList.remove("close");
        }
    }
    
    render(){
    return(
    <div styleName="headbar">
        <span onClick={this.DisplayMenu} styleName="nav-btn">
            <i id="navIcon" className="icon bars"></i>
        </span>
        <span styleName="language">
            <a className="active">Fr </a>
            |
            <a> En</a>
        </span>
    </div>    
    )}
}

export default CSSModules(Headbar, styles, {allowMultiple: true});