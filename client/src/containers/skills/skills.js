//~~~~~~Dependency and Declaration~~~~~~//
import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './skills.module.css';
import SkillCard from '../../components/skillCard/skillCard.js';
import {Ajax} from '../../shared/utility.js';

class Skills extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = "";
    }
    
    async componentDidMount()
    {
        let skills = await Ajax.GetData("/api/skill");
        this.setState({skills});
    }
    
    DisplaySkills()
    {
        if(this.state.skills != null)
        {
            return this.state.skills.map((item, index) => (
                <SkillCard skills={item} /> 
            ))
        }
    }
    
    render(){
    if(this.state.skills != null)
    {
    return(
    <div id="skillset-body">
        {this.DisplaySkills()}
    </div>
    )}}
}

export default CSSModules(Skills, styles, {allowMultiple: true});