import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './sectiontitle.module.css';

class SectionTitle extends Component{
    
    constructor(props)
    {
        super(props);
    }
    
    componentDidMount()
    {
        window.addEventListener('scroll', this.AnimateText);
    }
    
    componentDidUpdate()
    {
        //Does the trick but doesnt seem really optimised
        this.AnimateText();
    }
    
    //Fonction qui anime le titre de différentes sections
    AnimateText = () =>
    {
        let ANIM_text = Array.from(document.querySelectorAll("." + styles.titleInfo)); 
        let ANIM_bar = Array.from(document.querySelectorAll("." + styles.titleBorder));
        
        for(let i = 0  ; i < ANIM_text.length ; i++){
            
            if((ANIM_text[i].getBoundingClientRect().bottom > 0) && 
               (ANIM_text[i].getBoundingClientRect().bottom < window.innerHeight))
            {
                ANIM_bar[i].style.height = "100%";
                setTimeout(function(){
                    ANIM_text[i].style.transform = "translateX(0%)";
                } , 1000);
            }
        }
    }
    
    DisplayTitleInfo = () => 
    {
        if(this.props.isInverted)
        {
            return(
                <span styleName="titleInfo">
                    <span styleName="title">{this.props.menu}</span>
                    <span styleName="legend">{this.props.title}</span>
                </span>
            )
        }else{
            return(
            <span styleName="titleInfo">
                    <span styleName="legend">{this.props.title}</span>
                    <span styleName="title">{this.props.menu}</span>
            </span>
            )}
    }
    
    render(){
    return(
    <div styleName="titleWrapper">
        <span styleName="titleBorder"></span>
        {this.DisplayTitleInfo()}
    </div>
    )}
}

export default CSSModules(SectionTitle, styles, {allowMultiple: true});