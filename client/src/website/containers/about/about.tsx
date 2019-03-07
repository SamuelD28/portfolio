import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './about.module.css';

export default CSSModules(() => {
	return (
		<div className="section">
			<div className="container">
				<div className="row text-center">
					<h2 className="bold">À propos</h2>
				</div>
				<div className="row">
					<div className="col-md-5">
						<img styleName="aboutImg" className="img-fluid" src="images/profil.jpg" />
					</div>
					<div className="col-md-6 col-md-push-1">
						<div styleName="aboutDesc">
							<h2 styleName="aboutTitle">Samuel <br /> Dubé</h2>
							<div styleName="desc">
								<div styleName="rotate">
									<h2 styleName="heading">À propos</h2>
								</div>
								<p>Bien l'bonjour, je m'appel Samuel Dubé. Je suis présentement un DEC en informatique au cégep de Saint-Jean-sur-Richelieu. Je me passione pour le dévelopement Web ainsi que la création 3d. Mon fruit favori est la banane.</p>
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
								</p>
								<p><a href="#" className="btn btn-primary btn-outline">Me Contacter</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}, styles);
