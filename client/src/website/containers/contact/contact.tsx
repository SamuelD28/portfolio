import React, { Component } from 'react'

export default class extends Component {
    render() {
        return (
            <div id="contact">
                <div className="container">
                    <div className="row text-center">
                        <h2 className="bold">Contact</h2>
                    </div>
                    <div style={{ marginTop: "10vw" }} className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="rotate">
                                        <h2 className="heading">Contacter</h2>
                                    </div>
                                </div>
                            </div>
                            <h3>Mes Coordonnées</h3>
                            <ul className="contact-info">
                                <li><span><i className="icon-map5"></i></span>345 d'auteuil, Sainte-Catherine, Canada, j5c 1m5</li>
                                <li><span><i className="icon-phone4"></i></span>514-688-6447</li>
                                <li><span><i className="icon-envelope2"></i></span><a href="mailto:samuel_personnel@outlook.com">Email</a></li>
                                <li><span><i className="icon-linkedin"></i></span><a href="https://www.linkedin.com/in/samuel-dube-026a8b169/">LinkedIn</a></li>
                                <li><span><i className="icon-facebook2"></i></span><a href="https://www.facebook.com/samuel.dube.73">Facebook</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
