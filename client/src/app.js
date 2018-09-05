import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.module.css';
import {Ajax, Utility} from './shared/utility.js';

// Components Import
import Navbar from './components/navbar/navbar.js';
import SectionTitle from './components/sectiontitle/sectiontitle.js';

//Containers Import
import KeySkill from './containers/keyskill/keyskill.js';
import Portfolio from './containers/portfolio/portfolio.js';
import Contact from './containers/contact/contact.js';
import DownBtn from './components/downBtn/downBtn.js';
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
        Utility.AdjustFullHeight(document.getElementById("banner"));
        let personnalInfo = await Ajax.GetData("/api/personnalinfo");
        this.setState({personnalInfo});
    }
    
    render(){
    return(
    <div>
        <Navbar />
        <Headbar />
        <div styleName="main">
            <section id="banner" styleName="banner"> 
                <SectionTitle title="Développeur Full Stack" menu="Samuel Dubé" isInverted={true} />
                <DownBtn />
            </section>
            <section id="about" styleName="about">
                <SectionTitle title="Mais qui est-ce?" menu="À propos" isInverted={false} />
                <KeySkill />
                <About personnalInfo={this.state.personnalInfo} />
            </section>
            <section id="portfolio" styleName="portfolio">
                <SectionTitle title="Mais que fait-il?" menu="Travaux" isInverted={false}/>
                <Portfolio />
            </section>
            <section id="contact" styleName="contact">
                <SectionTitle title="Mais comment le joindre?" menu="Contact" isInverted={false}/>
                <Contact personnalInfo={this.state.personnalInfo}/>
            </section>
        </div>
    </div>
    )}
}

export default CSSModules(App, styles, {allowMultiple: true});
