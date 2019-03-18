import React, { Component } from 'react'

import CSSModules from 'react-css-modules';
import styles from './competence.module.css';

export default CSSModules(class extends Component {
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <h2 className="bold">Compétences</h2>
                </div>
                <div className="col-md-10 mx-auto">
                    <div className="row justify-content-center">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 intro-heading">
                                <h2>Mes Compétences</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="rotate">
                                    <h2 className="heading">Compétences</h2>
                                </div>
                            </div>
                            <div className="col-md-8 row">
                                <div styleName="services" className="col-md-6">
                                    <h3 styleName="services-title">1 - Qualitées</h3>
                                    <ul styleName="services-list">
                                        <li>Créatif</li>
                                        <li>Curieux</li>
                                        <li>Résolution de problèmes</li>
                                        <li>Passioné</li>
                                        <li>Débrouillard   <span className="badge badge-primary">Meilleur Atout</span></li>
                                    </ul>
                                </div>
                                <div styleName="services" className="col-md-6">
                                    <h3 styleName="services-title">2 - Dévelopement Front-End</h3>
                                    <ul styleName="services-list">
                                        <li>Javscript ES5/ES6/ES7</li>
                                        <li>React  <span className="badge badge-primary">Meilleur Language</span></li>
                                        <li>TypeScript</li>
                                        <li>Semantic UI</li>
                                        <li>Bootstrap 4</li>
                                    </ul>
                                </div>
                                <div styleName="services" className="col-md-6">
                                    <h3 styleName="services-title">3 - Dévelopement Back-End</h3>
                                    <ul styleName="services-list">
                                        <li>Node js </li>
                                        <li>C# <span className="badge badge-primary">Meilleur Language</span></li>
                                        <li>Java</li>
                                        <li>Sql</li>
                                        <li>Mongo</li>
                                    </ul>
                                </div>
                                <div styleName="services" className="col-md-6">
                                    <h3 styleName="services-title">4 - Mentions honorables</h3>
                                    <ul styleName="services-list">
                                        <li>Python</li>
                                        <li>Android</li>
                                        <li>Sql Lite</li>
                                        <li>Adobe Xd</li>
                                        <li>Bash / Ark</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img styleName="competence-img" className="img-fluid" src="images/competence.jpeg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}, styles);
