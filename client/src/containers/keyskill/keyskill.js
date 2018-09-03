import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './keyskill.module.css';
import {Ajax} from '../../shared/utility.js';
import KeySkillCard from '../../components/keyskillCard/keyskillCard.js';

class KeySkill extends Component
{
    constructor(props)
    {
        super(props);
        this.state = "";
    }
    
    async componentDidMount()
    {
        let quality = await Ajax.GetData("/api/quality");
        this.setState({quality});
    }
    
    DisplayKeySkills()
    {
        if(this.state.quality != null)
        {
        return this.state.quality.map((item, index) => (
        <KeySkillCard image={`icon/${item.Image}`} title={item.Title} description={item.Description} key={item._id}/>
        ));
        }
    }
    
    render(){
    return(
    <div id="about-header">
        {this.DisplayKeySkills()}
    </div>
    )}
}

export default CSSModules(KeySkill, styles, {allowMultiple: true})