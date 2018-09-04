import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.module.css';
import {Ajax} from './shared/utility.js';

// Components Import
import Navbar from './components/navbar/navbar.js';
import SectionTitle from './components/sectiontitle/sectiontitle.js';

//Containers Import
import KeySkill from './containers/keyskill/keyskill.js';
import Portfolio from './containers/portfolio/portfolio.js';
import Contact from './containers/contact/contact.js';
import DownBtn from './components/downBtn/downBtn.js';
import BannerTitle from './components/bannerTitle/bannerTitle.js';
import Headbar from './components/headbar/headbar.js';
import About from './containers/about/about.js';

class App extends Component{
    
    constructor(props)
    {
        super(props);
        this.state =  "";
    }
    
    async componentDidMount()
    {
        let personnalInfo = await Ajax.GetData("/api/personnalinfo");
        this.setState({personnalInfo});
    }
    
    render(){
    return(
    <div>
        <span styleName="background-overlay"></span>
        <Navbar />
        <div styleName="main">
            <section styleName="banner"> 
                <Headbar />
                <BannerTitle />
                <DownBtn />
            </section>
            <section styleName="about">
                <SectionTitle title="Mais qui est-ce?" menu="À propos"/>
                <KeySkill />
                <About personnalInfo={this.state.personnalInfo} />
            </section>
            <section styleName="portfolio">
                <SectionTitle title="Mais que fait-il?" menu="Travaux"/>
                <Portfolio />
            </section>
            <section styleName="contact">
                <SectionTitle title="Mais comment le joindre?" menu="Contact"/>
                <Contact personnalInfo={this.state.personnalInfo}/>
            </section>
        </div>
    </div>
    )}
}

export default CSSModules(App, styles, {allowMultiple: true});
