import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './downBtn.module.css';

const DownBtn = () => {
    return(
    <span styleName="goDown-btn">
        <i className="icon chevron down"></i>
    </span>
)}

export default CSSModules(DownBtn, styles, {allowMultiple: true});