import React from 'react'

import CSSModules from 'react-css-modules';
import styles from './competence.module.css';

export default CSSModules(() => {
    return (
        <div className="section">
            <div className="container">
                <div className="row text-center">
                    <h2 className="bold">Services</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 intro-heading">
                                <h2>Here Are Some of My Skills</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="rotate">
                                    <h2 className="heading">Services</h2>
                                </div>
                            </div>
                            <div className="col-md-12 row">
                                <div className="col-md-6 services">
                                    <h3>1 - Graphic Design</h3>
                                    <ul>
                                        <li>UI Design</li>
                                        <li>Website &amp; Digital Design</li>
                                        <li>Brading &amp; Visual Identity</li>
                                        <li>Print Design</li>
                                    </ul>
                                </div>
                                <div className="col-md-6 services">
                                    <h3>3 - Front End Development</h3>
                                    <ul>
                                        <li>HTML / CSS</li>
                                        <li>JS &amp; Jquery Startup</li>
                                        <li>WordPress</li>
                                        <li>Jomla</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 row">
                                <div className="col-md-6 services">
                                    <h3>2 - Illustration</h3>
                                    <ul>
                                        <li>Editorial</li>
                                        <li>Narrative</li>
                                        <li>Motion Graphics</li>
                                        <li>Animation</li>
                                        <li>Visual Effects</li>
                                    </ul>
                                </div>
                                <div className="col-md-6 services">
                                    <h3>4 - Web Marketing</h3>
                                    <ul>
                                        <li>Sales Marketing</li>
                                        <li>Invoice</li>
                                        <li>eCommerce</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}, styles);
