import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './portfolioprojects.module.css';
import {Ajax} from '../../shared/utility.js';
import PortfolioProjectCard from '../../components/portfolioprojectCard/portfolioprojectCard.js';

class PortfolioProjects extends Component
{
    constructor(props)
    {
        super(props);
        this.state = "";
    }
    
    async componentDidMount()
    {
        let works = await Ajax.GetData("/api/work");
        this.setState({works});
    }
    
    DisplayWorks = () =>
    {
        if(this.state.works != null)
        {
            return this.state.works.map((item, index) => (
                <PortfolioProjectCard work={item} key={item._id}/>
            ));
        }
    }
    
    render(){
    return(
    <div className="portfolio-content">
        <div id="portfolio-web" className="portfolio-body">
            {this.DisplayWorks()}
        </div>
    </div>
    )} 
}

export default CSSModules(PortfolioProjects, styles, {allowMultiple: true});


