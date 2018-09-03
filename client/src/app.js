import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.module.css';
import {Ajax} from './shared/utility.js';

// Components Import
import Navbar from './components/navbar/navbar.js';
import SectionTitle from './components/sectiontitle/sectiontitle.js';

//Containers Import
import KeySkill from './containers/keyskill/keyskill.js';
import PersonnalDesc from './containers/personnaldesc/personnaldesc.js';
import PortfolioProjects from './containers/portfolioprojects/portfolioprojects.js';
import Skills from './containers/skills/skills.js';

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
        console.log(this.state.personnalInfo);
    }
    
    render(){
        return(
    <div>
        <span id="background-overlay"></span>
        <Navbar />
        <div id="main">
            <section id="banner">
                <div id="nav-top">
                    <span id="nav-btn"><i className="icon bars"></i></span>
                    <span id="language"><a className="active">Fr </a>|<a> En</a></span>
                </div>
                <div id="banner-title" className="title-wrapper">
                    <span className="title-border"></span>
                    <span className="title-info">
                        <span className="title">Samuel Dubé</span>
                        <span className="legend">Développeur Web & Artiste 3d</span>
                    </span>
                </div>
                <span id="goDown-btn">
                    <i className="icon chevron down"></i>
                </span>
            </section>
            <section id="about">
                <SectionTitle title="Mais qui est-ce?" menu="À propos"/>
                <KeySkill />
                <div id="about-body">
                    <PersonnalDesc personnalInfo={this.state.personnalInfo}/>
                    <div id="skillset"> 
                        <div id="skillset-header">
                            <span className="active-prog nav-tab">Programmation</span>
                            <span>|</span>
                            <span className="nav-tab">Framework</span>
                            <span>|</span>
                            <span className="nav-tab">3d</span>
                        </div>
                        <Skills />
                    </div>
                </div>
            </section>
            <section id="portfolio">
                <SectionTitle title="Mais que fait-il?" menu="Travaux"/>
                <div id="portfolio-header">
                    <div id="skillset-header">
                        <span data-content="portfolio-web" className="active-prog cat-tab">Programmation</span>
                        <span>|</span>
                        <span data-content="portfolio-art" className="cat-tab">3d</span>
                    </div>
                </div>
                <PortfolioProjects />
            </section>
            <section id="contact">
                <SectionTitle title="Mais comment le joindre?" menu="Contact"/>
                <div className="contact-container">
                    <div className="contact-left">
                        <div className="contact-info">
                            <span className="contact-icon"><i className="icon map marker alternate"></i></span>
                            <div>
                                <span><b>Adresse</b><br/>
                                <hr />
                                Sainte-Catherine,<br /> QC J5C 1J8,<br /> Canada</span>
                            </div>
                        </div>
                        <div className="contact-info">
                            <span className="contact-icon"><i className="icon phone"></i></span>
                            <div>
                                <span> <b>Téléphone </b><br/>
                                <hr />
                                514-688-6447</span>
                            </div>
                        </div>
                        <div className="contact-info">
                            <span className="contact-icon"><i className="icon mail"></i></span>
                            <div>
                                <span> <b>Question ?</b><br/>
                                <hr />
                                samuel_personnel@outlook.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form className="form" action="php/mail.php" method="post" encType="multipart/form-data">
                            <div className="form-group">
                                <input required="required" type="text" name="name" placeholder="Nom" />
                            </div>
                            <div className="form-group">
                                <input required="required" type="email" name="email" placeholder="Email" />  
                                <input required="required" type="text" name="sujet" placeholder="Sujet" />
                            </div>
                            <textarea required="required" name="message" placeholder="Message"></textarea>
                            <button type="submit" name="send" className="send-btn">Envoyer</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )}
}

export default CSSModules(App, styles, {allowMultiple: true});
