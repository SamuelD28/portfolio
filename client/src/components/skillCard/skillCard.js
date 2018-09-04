//~~~~~~~~~~Dependency and Declaration~~~~~~~~~~~//
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './skillCard.module.css';

const SkillCard = (props) => {
    
    let backgroundColor1 = (props.activeSkills === "programming")? "#57777f":
                           (props.activeSkills === "framework")? "#627f57":
                           (props.activeSkills === "modeling")?"#915a5a": "cyan";
                           
    let backgroundColor2 = (props.activeSkills === "programming")? "#738d94":
                           (props.activeSkills === "framework")? "#7c9473":
                           (props.activeSkills === "modeling")?"#a37676": "cyan";
    
    if(props.skills != null)
    {
    return(
    <div styleName="skill">
        <span styleName="skill-name" style={{background: backgroundColor1}}>{props.skills.Title}</span>
        <div styleName="skill-bar">
            <span styleName="skill-bar-bg" style={{paddingLeft: `${props.skills.Pourcentage}%`, background: backgroundColor2}}></span>
        </div>
        <span styleName="skill-percentage">{props.skills.Pourcentage}%</span>
    </div>
    )}
}

export default CSSModules(SkillCard, styles, {allowMultiple: true});