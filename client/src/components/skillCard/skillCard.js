//~~~~~~~~~~Dependency and Declaration~~~~~~~~~~~//
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './skillCard.module.css';

const SkillCard = (props) => {
    if(props.skills != null)
    {
    return(
    <div class="skill">
        <span class="skill-name">{props.skills.Title}</span>
        <div class="skill-bar">
            <span class="skill-bar-bg"></span>
        </div>
        <span class="skill-percentage">{props.skills.Pourcentage}%</span>
    </div>
    )}
}

export default CSSModules(SkillCard, styles, {allowMultiple: true});