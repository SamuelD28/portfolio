import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './about.module.css';

export default CSSModules(class About extends Component<any, any> {
	render() {
		return (
			<div className="container">
				<div className="row text-center">
					<h2 className="bold">À propos</h2>
				</div>
				<div className="col-md-10 mx-auto">
					<div className="row">
						<div className="col-md-6">
							<img styleName="aboutImg" className="img-fluid" src="images/profil.jpg" />
						</div>
						<div className="col-md-6 col-md-push-1">
							<div styleName="aboutDesc">
								<h2 styleName="aboutTitle">Samuel <br /> Dubé</h2>
								<h4>Développeur logiciel</h4>
								<div styleName="desc">
									<div styleName="rotate">
										<h2 styleName="heading">À propos</h2>
									</div>
									<p>
										Jeune homme passionné et persévérant qui n’a pas peur des défis.
										J’ai comme crédo de toujours apporter ma touche unique, ma solution et de ne pas avoir peur de sortir des sentiers battus.
										Je complète présentement ma deuxième année en informatique au cégep de Saint-Jean-sur-Richelieu.
									</p>
									<p>
										<a href="SamuelDubeCV.docx" >Curriculum vitae</a>
									</p>
									<p className="social-icons">
										<a className="social-icon" href="https://www.facebook.com/samuel.dube.73">
											<i className="icon-facebook2"></i>
										</a>
										<a className="social-icon" href="https://github.com/SamuelD28">
											<i className="icon-github"></i>
										</a>
										<a className="social-icon" href="https://www.linkedin.com/in/samuel-dube-026a8b169/">
											<i className="icon-linkedin"></i>
										</a>
										<a className="social-icon" href="mailto:samuel_personnel@outlook.com">
											<i className="icon-mail4"></i>
										</a>
										<a className="social-icon">
											<i className="icon-phone"></i>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}, styles);
