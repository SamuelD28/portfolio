import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './personnaldesc.module.css';

const PersonnalDesc = (props) =>{
    if(props.personnalInfo != null)
    return(
    <div styleName="my-info">
        <img alt="" styleName="my-img" src={`img/${props.personnalInfo.ProfilImage}`} />
        <p styleName="my-desc">{props.personnalInfo.Description}</p>
    </div>
    )}

export default CSSModules(PersonnalDesc, styles, {allowMultiple: true});