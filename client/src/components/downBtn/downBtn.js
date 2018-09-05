import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './downBtn.module.css';

class DownBtn extends Component{
    
    componentDidMount()
    {
        window.addEventListener("scroll" , this.RotateArrow);
    }
    
    RotateArrow = () =>
    {
        let arrow    = document.querySelector("." + styles.goDownIcon);
        
        if(window.scrollY !== 0)
            arrow.style.transform = "rotate(180deg)";
        else
            arrow.style.transform = "rotate(0deg)";
    }
    
    SlideTo = (e) =>
    {
        let aboutSection    = document.getElementById("about");
        let bannerSection   = document.getElementById("banner");
        
        if(window.scrollY === 0)
            aboutSection.scrollIntoView({block: "start" , behavior : "smooth"});
        else
            bannerSection.scrollIntoView({block : "start", behavior : "smooth"});
    }
    
    render(){
    return(
    <span onClick={this.SlideTo} styleName="goDown-btn">
        <i styleName="goDownIcon" className="icon chevron down"></i>
    </span>
    )}
}

export default CSSModules(DownBtn, styles, {allowMultiple: true});