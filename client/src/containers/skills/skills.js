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
        this.state = {activeSkills: "programming"};
    }
    
    async componentDidMount()
    {
        let skills = await Ajax.GetData("/api/skill");
        this.setState({skills});
    }
    
    DisplaySkills = () =>
    {
        if(this.state.skills != null)
        {
            return this.state.skills.map((item, index) => (
                this.DisplaySelectedSkills(item)
            ))
        }
    }
    
    DisplaySelectedSkills = (item) =>
    {
        if(item.Category === this.state.activeSkills)
            return <SkillCard skills={item} key={item._id} activeSkills={this.state.activeSkills}/>
    }
    
    ChangeActiveSkills = (e) => {
        let activeSkills = e.target.getAttribute("skills");
        this.setState({activeSkills: activeSkills});
    }
    
    render(){
    if(this.state.skills != null)
    {
    return(
    <div id="skillset"> 
        <div id="skillset-header">
            <span onClick={this.ChangeActiveSkills} skills="programming" className="active-prog nav-tab">Programmation</span>
            <span>|</span>
            <span onClick={this.ChangeActiveSkills} skills="framework" className="nav-tab">Framework</span>
            <span>|</span>
            <span onClick={this.ChangeActiveSkills} skills="modeling" className="nav-tab">3d</span>
        </div>
        <div id="skillset-body">
            {this.DisplaySkills()}
        </div>
    </div>
    )}}
}

export default CSSModules(Skills, styles, {allowMultiple: true});