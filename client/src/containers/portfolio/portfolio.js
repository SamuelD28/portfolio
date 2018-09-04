import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './portfolio.module.css';
import {Ajax} from '../../shared/utility.js';
import PortfolioCard from '../../components/portfolioCard/portfolioCard.js';

class Portfolio extends Component
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
                <PortfolioCard work={item} key={item._id}/>
            ));
        }
    }
    
    render(){
    return(
    <div>
        <div styleName="portfolio-content">
            <div id="portfolio-web" styleName="portfolio-body">
                {this.DisplayWorks()}
            </div>
        </div>
    </div>
    )} 
}

export default CSSModules(Portfolio, styles, {allowMultiple: true});


