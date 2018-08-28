import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.module.css';

// Compoent Import
import Navbar from '../components/navbar/navbar.js';

class App extends Component{
    
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
                <div className="title-wrapper">
                    <span className="title-border"></span>
                    <span className="title-info">
                        <span className="legend">Mais qui est-ce?</span>
                        <span className="title">À propos</span>
                    </span>
                </div>
                <div id="about-header">
                    <div className="key-skill">
                        <img alt="" className="key-img" src="/img/icon/brush-icon.png" />
                        <span className="key-title">Artistique</span>
                        <span className="key-desc">Mes projets intégrent toujours une touche artistique bien unique.</span>
                    </div>
                    <div className="key-skill">
                        <img alt="" className="key-img" src="/img/icon/light-icon.png" />
                        <span className="key-title">Créatif</span>
                        <span className="key-desc">Ma créativité est ma meilleur carte. Autant dans la résolution de problème que dans la création 3d.</span>
                    </div>
                    <div className="key-skill">
                        <img alt="" className="key-img" src="/img/icon/hat-icon.png" />
                        <span className="key-title">Apprenti</span>
                        <span className="key-desc">Étudiant formel en informatique et autodidacte dans le domaine de la 3d.</span>
                    </div>
                    <div className="key-skill">
                        <img alt="" className="key-img" src="/img/icon/search-icon.png" />
                        <span className="key-title">Curieux</span>
                        <span className="key-desc">Je suis curieux de nature. J'aime questioner le pourquoi du comment.</span>
                    </div>
                </div>
                <div id="about-body">
                    <div id="my-info">
                        <img alt="" className="my-img" src="/img/profil.jpg" />
                        <p className="my-desc">Bien l'bonjour, je m'appel Samuel Dubé. Je suis présentement un DEC en informatique au cégep de Saint-Jean-sur-Richelieu. 
                        Je me passione pour le dévelopement Web ainsi que la création 3d. 
                        Mon fruit favori est la banane.</p>
                    </div>
                    <div id="skillset">
                        <div id="skillset-header">
                            <span className="active-prog nav-tab">Programmation</span>
                            <span>|</span>
                            <span className="nav-tab">Framework</span>
                            <span>|</span>
                            <span className="nav-tab">3d</span>
                        </div>
                        <div id="skillset-body">
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio">
                <div className="title-wrapper">
                    <span className="title-border"></span>
                    <span className="title-info"> 
                        <span className="legend">Mais que fait-il?</span>
                        <span className="title">Travaux</span>
                    </span>
                </div>
                <div id="portfolio-header">
                    <div id="skillset-header">
                        <span data-content="portfolio-web" className="active-prog cat-tab">Programmation</span>
                        <span>|</span>
                        <span data-content="portfolio-art" className="cat-tab">3d</span>
                    </div>
                </div>
                <div className="portfolio-content">
                    <div id="portfolio-web" className="portfolio-body">
                        <div className="portfolio-item-md over-grey">
                            <span className="portfolio-bg"  style={{backgroundImage: `url('/img/portfolio/web/lapresse/lapresse.jpg')`}}></span>
                            <span className="portfolio-title">La <br /> Presse</span>
                            <span className="portfolio-btn"><a href="http://www.lapresse.ca/">Voir Projet <i className="icon external alternate"></i></a></span>
                            <span className="portfolio-bar"></span>
                            <span className="portfolio-legend">Copie de la page d'accueil du site web de la presse réalisé dans le cadre d'un cour.</span>
                        </div>
                        <div className="portfolio-item-md over-red">
                            <span className="portfolio-bg"  style={{backgroundImage: `url('/img/portfolio/web/creativa/home.jpg')`}}></span>
                            <span className="portfolio-title">Créativa<br /> Studio</span>
                            <span className="portfolio-btn">Voir Projet</span>
                            <span className="portfolio-bar"></span>
                            <span className="portfolio-legend">Site Web personnel pour promouvoir mes services dans le domaine de l'architecture.</span>
                            <div className="project-detail">
                                <div className="project-container">
                                    <div className="carousel-container">
                                        <span className="carousel">
                                            <img alt="" className="carousel-img" src="/img/portfolio/web/creativa/home.jpg" />
                                            <img alt="" className="carousel-img" src="/img/portfolio/web/creativa/portfolio.jpg" />
                                            <img alt="" className="carousel-img" src="/img/portfolio/web/creativa/service.jpg" />
                                            <img alt="" className="carousel-img" src="/img/portfolio/web/creativa/contact.jpg" />
                                        </span>
                                        <div className="carousel-btn left-btn"><i className="icon left chevron"></i></div>
                                        <div className="carousel-btn right-btn"><i className="icon right chevron"></i></div>
                                    </div>
                                    <div className="project-info">
                                        <div className="project-desc">Site Web personnel utilisé pour faire la promotion de mes services d'artiste 3d dans le domaine de l'architecture. 
                                        Trois versions ont été créer en utilisant la plateforme Wordpress.com. Celle-ci est la plus récente et la plus peaufiner.
                                        </div>
                                        <div className="project-key">
                                            <ul>
                                                <li><i className="icon checkmark"></i> Réalisé avec Wordpress.com </li>
                                                <li><i className="icon checkmark"></i> Premier Site Web mit en ligne</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item-md portfolio-large over-blue " >
                            <span className="portfolio-bg"  style={{backgroundImage: `url('/img/portfolio/web/fromscratch/home.jpg')`}}></span>
                            <span className="portfolio-title">From<br /> Scratch</span>
                            <span className="portfolio-btn">Voir Projet</span>
                            <span className="portfolio-bar"></span>
                            <span className="portfolio-legend">Projet d'agrandissement pour ma marque créativa studio qui ne verras pas le jour.</span>
                            <div className="project-detail">
                                <div className="project-container">
                                    <div className="carousel-container">
                                        <span className="carousel">
                                            <img alt="" className="carousel-img" src="/img/portfolio/web/fromscratch/home.jpg" />
                                            <img alt="" className="carousel-img" src="/img/portfolio/web/fromscratch/shop.jpg" />
                                            <img alt="" className="carousel-img" src="/img/portfolio/web/fromscratch/portfolio.jpg" />
                                            <img alt="" className="carousel-img" src="/img/portfolio/web/fromscratch/learning.jpg" />
                                            <img alt="" className="carousel-img" src="/img/portfolio/web/fromscratch/shop-cart.jpg" />
                                        </span>
                                        <div className="carousel-btn left-btn"><i className="icon left chevron"></i></div>
                                        <div className="carousel-btn right-btn"><i className="icon right chevron"></i></div>
                                    </div>
                                    <div className="project-info">
                                        <div className="project-desc">Gros projet d'agrandissement pour ma marque Creativa Studio (<i>qui serais devenu From Scratch</i>). Le projet
                                        quoique prometteur sur papier ne verras pas la lumière du jour. J'ai pris cette décision après avoir mené une étude de marché auprès des firmes d'architectures.
                                        
                                        </div>
                                        <div className="project-key">
                                            <ul>
                                                <li><i className="icon checkmark"></i> Réalisé en Php/Sql </li>
                                                <li><i className="icon checkmark"></i> Vidéo en bannière</li>
                                                <li><i className="icon checkmark"></i> Système pour uploader des modèles</li>
                                                <li><i className="icon checkmark"></i> Panier d'achats fonctionnels</li>
                                                <li><i className="icon checkmark"></i> Utilisation du framework bootstrap 3</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        <div className="portfolio-item-md over-grey">
                            <span className="portfolio-bg"  style={{backgroundImage: `url('/img/portfolio/web/student/banner1.jpg')`}}></span>
                            <span className="portfolio-title">Student<br /> Application</span>
                            <span className="portfolio-btn">Voir Projet</span>
                            <span className="portfolio-bar"></span>
                            <span className="portfolio-legend">Projet en cours, application mobile destinée aux étudiants</span>
                            <div className="project-detail">
                                <div className="project-container">
                                    <div className="carousel-container">
                                        <span className="carousel">
                                            <img alt="" className="carousel-img" src="/img/portfolio/web/student/banner1.jpg" />
                                            <img alt="" className="carousel-img" src="/img/portfolio/web/student/banner2.jpg" />
                                        </span>
                                        <div className="carousel-btn left-btn"><i className="icon left chevron"></i></div>
                                        <div className="carousel-btn right-btn"><i className="icon right chevron"></i></div>
                                    </div>
                                    <div className="project-info">
                                        <div className="project-desc"><b>En cours de développement.</b> Projet personnel portant sur une application mobile d'entraide étudiante. Incorporant 
                                        une approche plus libre de tuteurs/tutorés, l'application offre à un étudiant avec des difficultés de l'aide d'un confrère compétent.
                                        </div>
                                        <div className="project-key">
                                            <ul>
                                                <li><i className="icon checkmark"></i> Réalisé en Node.js/Express/MongoDb </li>
                                                <li><i className="icon checkmark"></i> Développement orientée Hybride</li>
                                                <li><i className="icon checkmark"></i> Intégration de service de récompense</li>
                                                <li><i className="icon checkmark"></i> Premier développement mobile</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item-md over-blue">
                            <span className="portfolio-bg"  style={{backgroundImage: `url('/img/portfolio/web/cookingblog/home.jpg')`}}></span>
                            <span className="portfolio-title">Cooking<br /> Blog</span>
                            <span className="portfolio-btn">Voir Projet</span>
                            <span className="portfolio-bar"></span>
                            <span className="portfolio-legend">Blog fictif portant sur le thème de la cuisine</span>
                            <div className="project-detail">
                                <div className="project-container">
                                    <div className="carousel-container">
                                        <span className="carousel">
                                            <img alt="" className="carousel-img" src="/img/portfolio/web/cookingblog/home.jpg" />
                                        </span>
                                    </div>
                                    <div className="project-info">
                                        <div className="project-desc"><b>En cours de développement.</b> Projet personnel fictif portant sur la création d'un blog dans le thème de la cuisine.
                                        </div>
                                        <div className="project-key">
                                            <ul>
                                                <li><i className="icon checkmark"></i> Réalisé en Node.js/Express/MongoDb </li>
                                                <li><i className="icon checkmark"></i> Système pour uploader des articles</li>
                                                <li><i className="icon checkmark"></i> Section administrative</li>
                                                <li><i className="icon checkmark"></i> Utilisation du framework Semantic UI</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item-md portfolio-large over-green">
                            <span className="portfolio-bg"  style={{backgroundImage: `url('/img/portfolio/web/yelpcamp/home.jpg')`}}></span>
                            <span className="portfolio-title">Yelp<br /> Camp</span>
                            <span className="portfolio-btn">Voir Projet</span>
                            <span className="portfolio-bar"></span>
                            <span className="portfolio-legend">Projet fictif portant le même concept que yelp mais pour les sites de camping</span>
                            <div className="project-detail">
                                <div className="project-container">
                                    <div className="carousel-container">
                                        <span className="carousel">
                                            <img alt="" className="carousel-img" src="/img/portfolio/web/yelpcamp/home.jpg" />
                                        </span>
                                    </div>
                                    <div className="project-info">
                                        <div className="project-desc"><b>En cours de développement.</b> Projet fictif portant sur le même thème que yelp mais pour différent type de camping extérieur.
                                        
                                        </div>
                                        <div className="project-key">
                                            <ul>
                                                <li><i className="icon checkmark"></i> Réalisé en Node.js/Express/MongoDb </li>
                                                <li><i className="icon checkmark"></i> Système d'authentification Passport</li>
                                                <li><i className="icon checkmark"></i> Banque d'utilisateur pouvant intéragir</li>
                                                <li><i className="icon checkmark"></i> Utilisation du framework Bootstrap 4</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                    <div id="portfolio-art" className="portfolio-body">
                        <div className="portfolio-item-md over-grey">
                            <span className="portfolio-bg" style={{backgroundImage: `url('/img/portfolio/3d/port-pool-deck.jpg')`}}></span>
                            <span className="portfolio-title">Maison Rustique</span>
                            <span className="portfolio-btn"><a href="http://samueld28.cgsociety.org/art/blender-photshop-rustic-house-17667922">Voir Projet <i className="icon external alternate"></i></a></span>
                            <span className="portfolio-bar"></span>
                            <span className="portfolio-legend">Maison de style rustique situé en région éloignée. Réalisé avec Blender & Cycles</span>
                        </div>
                        <div className="portfolio-item-md over-green">
                            <span className="portfolio-bg" style={{backgroundImage: `url('/img/portfolio/3d/asian-bed.jpg')`}}></span>
                            <span className="portfolio-title">Lit Asiatique</span>
                            <span className="portfolio-btn"><a href="https://www.cgtrader.com/3d-models/furniture/bed/asian-bedroom-sets">Voir Projet <i className="icon external alternate"></i></a></span>
                            <span className="portfolio-bar"></span>
                            <span className="portfolio-legend">Lit asiatique réalisé avec 3ds Max & Corona. En vente sur ma boutique.</span>
                        </div>
                        <div className="portfolio-item-md portfolio-large over-red">
                            <span className="portfolio-bg" style={{backgroundImage: `url('/img/portfolio/3d/mech-render.png')`}}></span>
                            <span className="portfolio-title">Robot de Combat</span>
                            <span className="portfolio-btn"><a href="https://www.cgtrader.com/free-3d-models/character/sci-fi/combat-mech-b-51">Voir Projet <i className="icon external alternate"></i></a></span>
                            <span className="portfolio-bar"></span>
                            <span className="portfolio-legend">Robot de combat réalisé avec 3ds & Substance & Marmoset. Disponible gratuitement sur ma boutique.</span>
                        </div>
                        <div className="portfolio-item-md over-grey">
                            <span className="portfolio-bg" style={{backgroundImage: `url('/img/portfolio/3d/fridge-samsung.jpg')`}}></span>
                            <span className="portfolio-title">Réfrégirateur Samsung</span>
                            <span className="portfolio-btn"><a href="https://www.cgtrader.com/3d-models/furniture/appliance/samsung-fridge-b31da446-37e5-4894-a253-906ab1b9168f">Voir Projet <i className="icon external alternate"></i></a></span>
                            <span className="portfolio-bar"></span>
                            <span className="portfolio-legend">Réfrégirateur samsung avec intérieur complet. En vente sur ma boutique.</span>
                        </div>
                        <div className="portfolio-item-md  over-blue">
                            <span className="portfolio-bg" style={{backgroundImage: `url('/img/portfolio/3d/port-bedroom.jpg')`}}></span>
                            <span className="portfolio-title">Chambre Moderne</span>
                            <span className="portfolio-btn"><a href="http://samueld28.cgsociety.org/art/3dsmax-corona-renderer-krita-modern-bedroom-1743752">Voir Projet <i className="icon external alternate"></i></a></span>
                            <span className="portfolio-bar"></span>
                            <span className="portfolio-legend">Chambre de style moderne situé dans un immeuble à condos. Réalisé avec 3ds max & Corona.</span>
                        </div>
                        <div className="portfolio-item-md portfolio-large over-green">
                            <span className="portfolio-bg" style={{backgroundImage: `url('/img/portfolio/3d/port-house-modern.jpg')`}}></span>
                            <span className="portfolio-title">Maison Moderne</span>
                            <span className="portfolio-btn"><a href="http://samueld28.cgsociety.org/art/blender-photoshop-modern-house-in-17667919">Voir Projet <i className="icon external alternate"></i></a></span>
                            <span className="portfolio-bar"></span>
                            <span className="portfolio-legend">Maison de style moderne situé en région campagnarde. Réalisé avec Blender & Cycles & Substance</span>
                        </div>
                </div>
                </div>
            </section>
            <section id="contact">
                <div className="title-wrapper">
                    <span className="title-border"></span>
                    <span className="title-info"> 
                        <span className="legend">Mais comment le joindre?</span>
                        <span className="title">Contact</span>
                    </span>
                </div>
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
