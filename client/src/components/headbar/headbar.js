import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './headbar.module.css';



class Headbar extends Component{
    
    DisplayMenu(e)
    {
        let navbar = document.getElementById("navbar");
        if(e.target.children[0].classList.contains("bars"))
        {
            navbar.style.transform = "translateX(0%)";
            e.target.children[0].classList.remove("bars");
            e.target.children[0].classList.add("close");
            window.scrollTo(0 , 0);
            // UI_body.classList.add("stop-scrolling");
        }
        else 
        {
            navbar.style.transform = "translateX(-100%)";
            e.target.children[0].classList.add("bars");
            e.target.children[0].classList.remove("close");
            // UI_body.classList.remove("stop-scrolling");
        }
    }
    
    render(){
    return(
    <div styleName="headbar">
        <span onClick={this.DisplayMenu} styleName="nav-btn">
            <i className="icon bars"></i>
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