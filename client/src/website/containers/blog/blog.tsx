import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './blog.module.css';

export default CSSModules(() => {
    return (
        <div className="section" >
            <div className="container">
                <div className="row text-center">
                    <h2 className="bold">Travaux</h2>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-0 text-center intro-heading">
                        <h2>Voici une liste de mes travaux</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="rotate">
                            <h2 className="heading">Mes Travaux</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="article">
                            <a href="#" className="blog-img">
                                <img styleName="article-img" className="img-responsive" src="images/portfolio/sjlm/home.jpg" />
                                <div className="overlay"></div>
                                <div className="link">
                                    <span className="read">Lire plus</span>
                                </div>
                            </a>
                            <div className="desc">
                                <span className="meta">15, Feb 2018</span>
                                <h2><a>Saint-Jacques-le-Mineur</a></h2>
                                <p>Nouveau site web pour la municipalité de Saint-Jacques-le-Mineur dans le cadre du projet de refonte.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="article">
                            <a href="#" className="blog-img">
                                <img styleName="article-img" className="img-responsive" src="images/portfolio/todoapp/home.jpg"
                                    alt="html5 bootstrap by colorlib.com" />
                                <div className="overlay"></div>
                                <div className="link">
                                    <span className="read">Lire plus</span>
                                </div>
                            </a>
                            <div className="desc">
                                <span className="meta">15, Feb 2018</span>
                                <h2><a>To do app</a></h2>
                                <p>Application mobile classique permettant de garder une liste de tâche à effectuer. Réalisé dans un cadre d'apprentissage scolaire.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="article">
                            <a href="#" className="blog-img">
                                <img styleName="article-img" className="img-responsive" src="images/portfolio/pythonface/home.jpg"
                                    alt="html5 bootstrap by colorlib.com" />
                                <div className="overlay"></div>
                                <div className="link">
                                    <span className="read">Lire plus</span>
                                </div>
                            </a>
                            <div className="desc">
                                <span className="meta">15, Feb 2018</span>
                                <h2><a>Reconnaisance Faciale</a></h2>
                                <p>Application en python permettant de 'scrap' un lien web pour trouver des images, effectuer une reconnaisance faciale et envoyer un email avec les images contenant des visages.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="article">
                            <a href="#" className="blog-img">
                                <img styleName="article-img" className="img-responsive" src="images/portfolio/student/home.png"
                                    alt="html5 bootstrap by colorlib.com" />
                                <div className="overlay"></div>
                                <div className="link">
                                    <span className="read">Lire plus</span>
                                </div>
                            </a>
                            <div className="desc">
                                <span className="meta">15, Feb 2018</span>
                                <h2><a>Student</a></h2>
                                <p>Concept pour une application mobile destinée aux cégepiens et universitaires.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="article">
                            <a href="#" className="blog-img">
                                <img styleName="article-img" className="img-responsive" src="images/portfolio/yelpcamp/home.jpg"
                                    alt="html5 bootstrap by colorlib.com" />
                                <div className="overlay"></div>
                                <div className="link">
                                    <span className="read">Lire plus</span>
                                </div>
                            </a>
                            <div className="desc">
                                <span className="meta">15, Feb 2018</span>
                                <h2><a>Yelpcamp</a></h2>
                                <p>Application web fictive copiant le concept de yelp mais les campings extérieur. Réalisé dans un cadre éducatif.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="article">
                            <a href="#" className="blog-img">
                                <img styleName="article-img" className="img-responsive" src="images/portfolio/creativa/home.jpg"
                                    alt="html5 bootstrap by colorlib.com" />
                                <div className="overlay"></div>
                                <div className="link">
                                    <span className="read">Lire plus</span>
                                </div>
                            </a>
                            <div className="desc">
                                <span className="meta">15, Feb 2018</span>
                                <h2><a>Créativa</a></h2>
                                <p>Site Web personnel pour promouvoir mes services dans le domaine de l'architecture.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="article">
                            <a href="#" className="blog-img">
                                <img styleName="article-img" className="img-responsive" src="images/portfolio/sjlmcms/home.jpg"
                                    alt="html5 bootstrap by colorlib.com" />
                                <div className="overlay"></div>
                                <div className="link">
                                    <span className="read">Lire plus</span>
                                </div>
                            </a>
                            <div className="desc">
                                <span className="meta">15, Feb 2018</span>
                                <h2><a>Saint-Jacques-le-Mineur CMS</a></h2>
                                <p>Site web CMS destinée à la gestion du contenu pour le site web de la municipalité de Saint-Jacques-le-Mineur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="article">
                            <a href="#" className="blog-img">
                                <img styleName="article-img" className="img-responsive" src="images/portfolio/fromscratch/home.jpg"
                                    alt="html5 bootstrap by colorlib.com" />
                                <div className="overlay"></div>
                                <div className="link">
                                    <span className="read">Lire plus</span>
                                </div>
                            </a>
                            <div className="desc">
                                <span className="meta">15, Feb 2018</span>
                                <h2><a>From Scratch</a></h2>
                                <p>Projet d'agrandissement pour ma marque créativa studio qui ne verras pas le jour.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="article">
                            <a href="#" className="blog-img">
                                <img styleName="article-img" className="img-responsive" src="images/portfolio/mygeolife/home.jpg"
                                    alt="html5 bootstrap by colorlib.com" />
                                <div className="overlay"></div>
                                <div className="link">
                                    <span className="read">Lire plus</span>
                                </div>
                            </a>
                            <div className="desc">
                                <span className="meta">15, Feb 2018</span>
                                <h2><a>GeoLife</a></h2>
                                <p>Application mobile permettant de conserver une liste de destinations visités. Réalisé dans un cadre d'apprentissage scolaire.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="article">
                            <a href="#" className="blog-img">
                                <img styleName="article-img" className="img-responsive" src="images/portfolio/samueldube/home.jpg"
                                    alt="html5 bootstrap by colorlib.com" />
                                <div className="overlay"></div>
                                <div className="link">
                                    <span className="read">Lire plus</span>
                                </div>
                            </a>
                            <div className="desc">
                                <span className="meta">15, Feb 2018</span>
                                <h2><a>Ancien Portfolio</a></h2>
                                <p>Ancienne version de mon portfolio ou je listait mes compétences de développeur et artiste 3d.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}, styles);
