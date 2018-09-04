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
import LanguageBar from './components/languageBar/languageBar.js';
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
        <span id="background-overlay"></span>
        <Navbar />
        <div id="main">
            <section id="banner">
                <LanguageBar />
                <BannerTitle />
                <DownBtn />
            </section>
            <section id="about">
                <SectionTitle title="Mais qui est-ce?" menu="À propos"/>
                <KeySkill />
                <About personnalInfo={this.state.personnalInfo} />
            </section>
            <section id="portfolio">
                <SectionTitle title="Mais que fait-il?" menu="Travaux"/>
                <Portfolio />
            </section>
            <section id="contact">
                <SectionTitle title="Mais comment le joindre?" menu="Contact"/>
                <Contact personnalInfo={this.state.personnalInfo}/>
            </section>
        </div>
    </div>
    )}
}

export default CSSModules(App, styles, {allowMultiple: true});
