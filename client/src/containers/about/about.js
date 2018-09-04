//~~~~~~~~Dependency and Declaration~~~~~~~~~~//
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './about.module.css';
import PersonnalDesc from '../personnaldesc/personnaldesc.js';
import Skills from '../skills/skills.js';

const About = (props) => {
    return(
    <div styleName="about-body">
        <PersonnalDesc personnalInfo={props.personnalInfo}/>
        <Skills />
    </div>
)}

export default CSSModules(About, styles, {allowMultiple: true});