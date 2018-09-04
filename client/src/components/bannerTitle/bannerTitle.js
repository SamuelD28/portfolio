import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './bannerTitle.module.css';
import {Utility} from '../../shared/utility.js';

class BannerTitle extends Component{
    
    componentDidMount()
    {
        let banner = document.getElementById("banner-title");
        Utility.AdjustFullHeight(banner);
    }
    
    render(){
    return(
    <div id="banner-title" styleName="title-wrapper">
        <span styleName="title-border"></span>
        <span styleName="title-info">
            <span styleName="title">Samuel Dubé</span>
            <span styleName="legend">Développeur Full Stack</span>
        </span>
    </div>
    )}
}

export default CSSModules(BannerTitle, styles, {allowMultiple: true});