import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './keyskillCard.module.css';

const KeySkillCard = (props) => {
    return(
    <div className="key-skill">
        <img alt="" className="key-img" src={props.image} />
        <span className="key-title">{props.title}</span>
        <span className="key-desc">{props.description}</span>
    </div>
    )
}

export default CSSModules(KeySkillCard, styles, {allowMultiple: true});