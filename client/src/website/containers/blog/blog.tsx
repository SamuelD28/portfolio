import React, { Component } from 'react'

import CSSModules from 'react-css-modules'
import styles from './blog.module.css';

interface IProject {
    Title: string;
    Created_At: Date;
    Legend: string;
    Description: string;
    Images: Array<string>;
    Tags: Array<string>;
    GitHub?: string;
    Demo?: string;
    Size: Number;
    BestOne: boolean;
}

interface WorkState {
    selectedProject: IProject;
    openModal: boolean;
    activeSlide: number;
}

enum Direction {
    Left,
    Right
}

const projects: Array<IProject> = [
    {
        Title: "Saint-Jacques-le-Mineur",
        Created_At: new Date("2019-02-01"),
        Legend: "Nouveau site web pour la municipalité de Saint-Jacques-le-Mineur dans le cadre du projet de refonte.",
        Description: "Mon plus grand projet réalisé à ce jour. Le projet ma été octroyé dans le cadre de mon stage durant l'été 2018. La ville avait besoin de refaire à neuf son site web désuet ainsi que la plateforme pour gérer le contenu. J'ai donc eu le projet entre mes mains de la conception"
            + " jusqu'au déploiement. Les défis furent nombreux mais j'ai toujours réussi à les surmonter. Le projet ma permis d'en apprendre énormément, surtout par mes erreurs, sur le développement web.",
        Images: [
            "images/portfolio/sjlm/home.jpg",
            "images/portfolio/sjlm/banner_side_gallery.jpg",
            "images/portfolio/sjlm/banner_top.jpg",
            "images/portfolio/sjlm/banner_side.jpg",
            "images/portfolio/sjlm/council.jpg",
            "images/portfolio/sjlm/menu.jpg",
            "images/portfolio/sjlm/news_portrait.jpg",
            "images/portfolio/sjlm/news_stacked.jpg",
            "images/portfolio/sjlm/news_timeline.jpg",
            "images/portfolio/sjlm/table_socials.jpg",
            "images/portfolio/sjlm/contact.jpg",
        ],
        Tags: ["nodejs", "reactjs", "mongodb", "semantic ui", "bcrypt", "cloudinary", "quill"],
        GitHub: "https://github.com/SamuelD28/Sjlm",
        Demo: "https://saint-jacque-le-mineur-samueld28.c9users.io:8081/",
        Size: 8,
        BestOne: true
    },
    {
        Title: "Battleship",
        Created_At: new Date("2019-02-13"),
        Legend: "Jeux-vidéo de bataille navale réalisé en réseaux dans un contexte d'apprentissage scolaire.",
        Description: "Projet scolaire réalisé avec un coéquipier. Le tout était une copie du jeux bataille navale réalisé dans une console Window. Le défi ici fut de programmer le jeux en réseaux, "
            + " permettant ainsi à deux personnes de jouer l'une contre l'autre. Beaucoup de plaisirs dans ce projet malgré les limitations d'une console...",
        Images: [
            "images/portfolio/battleship/banner1.jpg",
            "images/portfolio/battleship/banner2.jpg",
        ],
        Tags: ["C#", "Tcp", "Console app", "Socket", "Object oriented"],
        GitHub: "https://github.com/SamuelD28/Tp1-Reseaux",
        Size: 4,
        BestOne: false
    },
    {
        Title: "Reconnaissance Faciale",
        Created_At: new Date("2018-11-20"),
        Legend: "Application python permettant d'effectuer de la reconnaisance faciale sur des images obtenues sur le web.",
        Description: "Projet scolaire réalisé seul. Le but du projet était d'en apprendre davantage sur python et de se servir de la libraire open cv qui permet d'effectuer de la reconnaisance faciale." +
            " L'application vas scrapper des images d'un lien web, les analyses pour détecter des visages et les trient dans les bons fichiers. On complète avec l'envoie d'un email avec les images contenant des visages.",
        Images: ["images/portfolio/pythonface/home.jpg"],
        Tags: ["python", "linux", "bash", "sendgrid", "open cv"],
        GitHub: "https://github.com/SamuelD28/Tp2_Mobile",
        Size: 4,
        BestOne: false
    },
    {
        Title: "Todo app",
        Created_At: new Date("2019-01-01"),
        Legend: "Application classique permettant de gérer une liste de tâche à effectuer.",
        Description: "Projet scolaire réalisé avec un coéquipier. Le concept est le plus classique au monde, gérer une liste de tâche à effectuer. Le projet était une introduction au développement "
            + " mobile android. J'ai également utilisé adobe xd pour créer mes vues, ce qui fut agréablement utile.",
        Images: [
            "images/portfolio/todoapp/banner.jpg",
        ],
        Tags: ["android", "native", "java", "adobe xd", "xml", "sql lite"],
        GitHub: "https://github.com/SamuelD28/Mobile-App-Student",
        Size: 4,
        BestOne: false
    },
    {
        Title: "Yelpcamp",
        Created_At: new Date("2017-12-03"),
        Legend: "Application web fictive copiant le concept de yelp mais les campings extérieur. Réalisé dans un cadre éducatif",
        Description: "Projet personnel réalisé dans un contexte d'apprentissage. Ce projet fut mon baptème du feux pour les applications web dynamique. Le concept est copié à celui de yelp mais "
            + " s'applique uniquement au camping. Le projet est à moitié complété (et ne seras jamais complété) et en toute franchise, le code est du spaguetti mais j'en suis quand même fière. Peut être que"
            + " je prendrais le temps de le complété un jour qui sait...",
        Images: [
            "images/portfolio/yelpcamp/home.jpg",
            "images/portfolio/yelpcamp/home2.jpg",
            "images/portfolio/yelpcamp/home3.jpg",
            "images/portfolio/yelpcamp/addcamp.jpg",
            "images/portfolio/yelpcamp/camp_detail.jpg",
            "images/portfolio/yelpcamp/camp_detail2.jpg",
            "images/portfolio/yelpcamp/camp_detail3.jpg",
            "images/portfolio/yelpcamp/profil.jpg",
        ],
        Tags: ["nodejs", "mongodb", "express", "ejs", "server rendering", "passport", "bootstrap"],
        GitHub: "https://github.com/SamuelD28/Yelp-Camp-Project",
        Size: 4,
        BestOne: false
    },
    {
        Title: "Créativa",
        Created_At: new Date("2019-01-01"),
        Legend: "Site Web personnel pour promouvoir mes services dans le domaine de l'architecture.",
        Description: "Site web réalisé avec Wordpress.com. L'aspect programmation est plutôt futile dans ce projet mais je tenais à l'inclure dans mon portfolio pour ajouter de la variété à mes projets."
            + " Un des premiers site web réalisé dans ma carrière. Le site avait pour but de promouvoir mes services d'artiste 3d dans le domaine de l'architecture. Créativa studio était le nom sous lequel j'offrais mes services.",
        Images: [
            "images/portfolio/creativa/home.jpg",
            "images/portfolio/creativa/portfolio.jpg",
            "images/portfolio/creativa/service.jpg",
            "images/portfolio/creativa/contact.jpg",
        ],
        Tags: ["wordpress", "css", "php", "3d rendering", "archviz"],
        Size: 4,
        BestOne: false
    },
    {
        Title: "Saint-Jacques-le-Mineur CMS",
        Created_At: new Date("2019-02-01"),
        Legend: "Site web CMS destinée à la gestion du contenu pour le site web de la municipalité de Saint-Jacques-le-Mineur.",
        Description: "Plateforme de gestion du contenu réalisé pour gérer le site web de la municipalitée de Saint-Jacques-le-Mineur. Définitivement la partie la plus difficile du projet. Les défis furent complexes "
            + " étant donné mon éventail de connaissance encore jeune à l'époque. J'ai tout de même persevéré et créer une plateforme simple et intuitive permettant de gèrer le contenu du site web. Beaucoup de leçon furent "
            + " tirées de ce projet.",
        Images: [
            "images/portfolio/sjlmcms/dashboard.jpg",
            "images/portfolio/sjlmcms/admin.jpg",
            "images/portfolio/sjlmcms/home.jpg",
            "images/portfolio/sjlmcms/login.jpg",
            "images/portfolio/sjlmcms/members.jpg",
            "images/portfolio/sjlmcms/menu_edit.jpg",
            "images/portfolio/sjlmcms/pages.jpg",
            "images/portfolio/sjlmcms/pages_edit.jpg",
            "images/portfolio/sjlmcms/publication_create.jpg",
            "images/portfolio/sjlmcms/publication.jpg",
            "images/portfolio/sjlmcms/ressources.jpg",
        ],
        Tags: ["nodejs", "reactjs", "express", "mongodb", "cloudinary", "bcrypt", "quill"],
        Size: 8,
        BestOne: false
    },
    {
        Title: "From Scratch",
        Created_At: new Date("2017-11-03"),
        Legend: "Projet d'agrandissement pour ma marque créativa studio qui ne verras pas le jour",
        Description: "Premier site web réalisé avec un language back-end. Le projet avait pour but d'être \"l'agrandissement\" de ma marque Créativa studio. J'avais comme but d'offrir de meilleurs services, des produits individuelles ainsi que "
            + " du contenu éducatif gratuit. Je me suis rendu compte que j'avais eu plus de plaisir à créer le site web que de faire de la modélisation 3d, j'ai donc laissé tomber le projet pour me concentrer sur le développement web.",
        Images: [
            "images/portfolio/fromscratch/home.jpg",
            "images/portfolio/fromscratch/about.jpg",
            "images/portfolio/fromscratch/portfolio.jpg",
            "images/portfolio/fromscratch/learning.jpg",
            "images/portfolio/fromscratch/shop.jpg",
            "images/portfolio/fromscratch/shop-cart.jpg",
            "images/portfolio/fromscratch/contact.jpg",
        ],
        Tags: ["php", "bootstrap", "mysql", "3d rendering"],
        Size: 6,
        BestOne: false
    },
    {
        Title: "GeoLife",
        Created_At: new Date("2018-10-07"),
        Legend: "Application mobile permettant de conserver une liste de destinations visités. Réalisé dans un cadre d'apprentissage scolaire.",
        Description: "Projet scolaire réalisé seul. Le but était de conserver sur une map une liste d'endroit visité et de pouvoir effectuer les opérations CRUD sur ceux-ci. Le projet fut "
            + " fort intéréssant et éducatif.",
        Images: [
            "images/portfolio/mygeolife/banner1.jpg",
            "images/portfolio/mygeolife/banner2.jpg",
        ],
        Tags: ["android", "java", "sql lite", "google map", "xml"],
        Size: 3,
        BestOne: false
    },
    {
        Title: "Ancien Portfolio",
        Created_At: new Date("2018-05-15"),
        Legend: "Ancienne version de mon portfolio ou je listait mes compétences de développeur et artiste 3d.",
        Description: "Première versino de mon portfolio réalisé avec le cocktail classique html/css/javascript et un peu de php pour la fonction d'envoie de email. Le portfolio avait pour but "
            + " de mettre de l'avant ma débrouillardise en montrant mes compétences de développeur et d'artiste 3d.",
        Images: [
            "images/portfolio/samueldube/home.jpg",
            "images/portfolio/samueldube/about.jpg",
            "images/portfolio/samueldube/work.jpg",
            "images/portfolio/samueldube/modal.jpg",
            "images/portfolio/samueldube/contact.jpg",
            "images/portfolio/samueldube/menu.jpg",
        ],
        Tags: ["html", "css", "js", "php", "aws", "sendgrid"],
        Size: 3,
        BestOne: false
    }];

export default CSSModules(class Blog extends Component<any, WorkState> {

    readonly state = {
        selectedProject: projects[0],
        openModal: false,
        activeSlide: 0
    }

    ShowProject(project: IProject): void {
        this.setState({ selectedProject: project, openModal: true });
    }

    DisplayBestTag(BestOne: boolean): any {
        if (BestOne)
            return (
                <span styleName="best-project">
                    <i className="icon-heart5"></i>
                </span>)
    }

    DisplayProjects = (): any => {
        return projects.map((project) => (
            <div
                key={project.Title}
                className={`col-md-${project.Size}`}
                onClick={() => this.ShowProject(project)}>
                <div className="article">
                    <a href="#" className="blog-img">
                        <img styleName="article-img" className="img-responsive" src={project.Images[0]} />
                        <div className="overlay"></div>
                        <div className="link">
                            <span className="read">Lire plus</span>
                        </div>
                    </a>
                    <div className="desc">
                        {this.DisplayBestTag(project.BestOne)}
                        <span className="meta">{project.Created_At.toDateString()}</span>
                        <h2>{project.Title}</h2>
                        <p>{project.Legend}</p>
                    </div>
                </div>
            </div>
        ))
    }

    ChangeSlide(direction: Direction): any {
        let nextPosition = this.state.activeSlide;
        switch (direction) {
            case Direction.Left: nextPosition--; break;
            case Direction.Right: nextPosition++; break;
        }

        if (nextPosition < 0)
            nextPosition = this.state.selectedProject.Images.length - 1;
        else if (nextPosition > this.state.selectedProject.Images.length - 1) {
            nextPosition = 0;
        }

        this.setState({ activeSlide: nextPosition });
    }

    DisplayLink(message: string, link: string | undefined): any {
        if (link !== undefined)
            return <div styleName="spacer">
                <a href={link}>{message}</a>
            </div>
    }

    DisplayCarousel = (images: Array<string>) => {
        if (images.length == 1)
            return (
                <div styleName="carousel">
                    <img styleName="carousel-img active" src={images[0]} alt={images[0]} />
                </div>)
        else
            return (
                <div styleName="carousel">
                    {this.state.selectedProject.Images.map((image, index) => (
                        <img key={image + index}
                            styleName={
                                this.state.activeSlide == index
                                    ? "carousel-img active"
                                    : "carousel-img"}
                            src={image}
                            alt={image + index} />
                    ))}
                    <button
                        onClick={() => { this.ChangeSlide(Direction.Left) }}
                        className="btn btn-primary"
                        styleName="carousel-btn btn-left">
                        <i className="icon-arrow-left2"></i>
                    </button>
                    <button
                        onClick={() => { this.ChangeSlide(Direction.Right) }}
                        className="btn btn-primary"
                        styleName="carousel-btn btn-right">
                        <i className="icon-arrow-right2"></i>
                    </button>
                </div>)
    }

    DisplayModal = () => {
        if (this.state.openModal) {
            return (
                <div>
                    <div
                        onClick={() => { this.setState({ openModal: false, activeSlide: 0 }) }}
                        styleName="modal-overlay">
                    </div>
                    <div styleName="modal-content">
                        {this.DisplayCarousel(this.state.selectedProject.Images)}
                        <div styleName="modal-information">
                            <div styleName="spacer tags">
                                {this.state.selectedProject.Tags.map((tag) => (
                                    <span styleName="tag">{tag}</span>
                                ))}
                            </div>
                            {this.DisplayLink("Voir le code source", this.state.selectedProject.GitHub)}
                            {this.DisplayLink("Voir une demo", this.state.selectedProject.Demo)}
                            <h2 styleName="spacer" >{this.state.selectedProject.Title}</h2>
                            <p styleName="spacer">{this.state.selectedProject.Description}</p>
                        </div>
                    </div>
                </div>)
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <h2 className="bold">Travaux</h2>
                </div>
                <div className="col-md-10 mx-auto">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-0 text-center intro-heading">
                            <h2>Mes travaux</h2>
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
                        {this.DisplayProjects()}
                    </div>
                    {this.DisplayModal()}
                </div>
            </div>
        )
    }
}, styles, { allowMultiple: true, handleNotFoundStyleName: "log" });
