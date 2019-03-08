import React, { Component } from 'react'

import CSSModules from 'react-css-modules'
import styles from './blog.module.css';
import update from 'immutability-helper';
import { isUndefined } from "util";

interface IProject {
    Title: string;
    Created_At: Date;
    Legend: String;
    Description: String;
    Images: Array<string>;
    Tags: Array<string>;
    GitHub?: String;
    Demo?: String;
    Size: Number;
}

interface WorkState {
    selectedProject: IProject;
    openModal: boolean;
}

const projects: Array<IProject> = [
    {
        Title: "Saint-Jacques-le-Mineur",
        Created_At: new Date("2019-01-01"),
        Legend: "Nouveau site web pour la municipalité de Saint-Jacques-le-Mineur dans le cadre du projet de refonte.",
        Description: "Nouveau site web pour la municipalité de Saint-Jacques-le-Mineur dans le cadre du projet de refonte.",
        Images: ["images/portfolio/sjlm/home.jpg"],
        Tags: ["nodejs", "reactjs", "mongodb", "semantic ui", "bcrypt", "cloudinary", "quill"],
        GitHub: "https://github.com/SamuelD28/Sjlm",
        Demo: "https://saint-jacque-le-mineur-samueld28.c9users.io:8081/",
        Size: 8,
    },
    {
        Title: "To do app",
        Created_At: new Date("2019-01-01"),
        Legend: "Application mobile classique permettant de garder une liste de tâche à effectuer. Réalisé dans un cadre d'apprentissage scolaire.",
        Description: "Application mobile classique permettant de garder une liste de tâche à effectuer. Réalisé dans un cadre d'apprentissage scolaire.",
        Images: ["images/portfolio/todoapp/home.jpg"],
        Tags: ["java", "android", "native", "xml", "adobe xd", "sql lite"],
        GitHub: "https://github.com/SamuelD28/Tp2_Mobile",
        Size: 4,
    },
    {
        Title: "Reconnaissance Faciale",
        Created_At: new Date("2019-01-01"),
        Legend: "Application en python permettant de 'scrap' un lien web pour trouver des images, effectuer une reconnaisance faciale et envoyer un email avec les images contenant des visages.",
        Description: "Application en python permettant de 'scrap' un lien web pour trouver des images, effectuer une reconnaisance faciale et envoyer un email avec les images contenant des visages.",
        Images: ["images/portfolio/pythonface/home.jpg"],
        Tags: ["python", "linux", "bash", "sendgrid", "open cv"],
        GitHub: "https://github.com/SamuelD28/Tp2_Mobile",
        Size: 4,
    },
    {
        Title: "Student",
        Created_At: new Date("2019-01-01"),
        Legend: "Concept pour une application mobile destinée aux cégepiens et universitaires.",
        Description: "Concept pour une application mobile destinée aux cégepiens et universitaires.",
        Images: ["images/portfolio/student/home.png"],
        Tags: ["hmtl", "css", "hybrid", "mobile", "flex"],
        GitHub: "https://github.com/SamuelD28/Mobile-App-Student",
        Size: 4,
    },
    {
        Title: "Yelpcamp",
        Created_At: new Date("2019-01-01"),
        Legend: "Application web fictive copiant le concept de yelp mais les campings extérieur. Réalisé dans un cadre éducatif",
        Description: "Application web fictive copiant le concept de yelp mais les campings extérieur. Réalisé dans un cadre éducatif",
        Images: ["images/portfolio/yelpcamp/home.jpg"],
        Tags: ["nodejs", "mongodb", "express", "ejs", "server rendering", "passport"],
        GitHub: "https://github.com/SamuelD28/Yelp-Camp-Project",
        Size: 4,
    },
    {
        Title: "Créativa",
        Created_At: new Date("2019-01-01"),
        Legend: "Site Web personnel pour promouvoir mes services dans le domaine de l'architecture.",
        Description: "Site Web personnel pour promouvoir mes services dans le domaine de l'architecture.",
        Images: ["images/portfolio/creativa/home.jpg"],
        Tags: ["wordpress", "css", "php", "3d rendering", "archviz"],
        Size: 4,
    },
    {
        Title: "Saint-Jacques-le-Mineur CMS",
        Created_At: new Date("2019-01-01"),
        Legend: "Site web CMS destinée à la gestion du contenu pour le site web de la municipalité de Saint-Jacques-le-Mineur.",
        Description: "Site web CMS destinée à la gestion du contenu pour le site web de la municipalité de Saint-Jacques-le-Mineur.",
        Images: ["images/portfolio/sjlmcms/home.jpg"],
        Tags: ["nodejs", "reactjs", "express", "mongodb", "cloudinary", "bcrypt", "quill"],
        Size: 8,
    },
    {
        Title: "From Scratch",
        Created_At: new Date("2019-01-01"),
        Legend: "Projet d'agrandissement pour ma marque créativa studio qui ne verras pas le jour",
        Description: "Projet d'agrandissement pour ma marque créativa studio qui ne verras pas le jour",
        Images: ["images/portfolio/fromscratch/home.jpg"],
        Tags: ["nodejs", "reactjs", "express", "mongodb", "cloudinary", "bcrypt", "quill"],
        Size: 6,
    },
    {
        Title: "GeoLife",
        Created_At: new Date("2019-01-01"),
        Legend: "Application mobile permettant de conserver une liste de destinations visités. Réalisé dans un cadre d'apprentissage scolaire.",
        Description: "Application mobile permettant de conserver une liste de destinations visités. Réalisé dans un cadre d'apprentissage scolaire.",
        Images: ["images/portfolio/mygeolife/home.jpg"],
        Tags: ["android", "java", "sql lite", "google map", "xml"],
        Size: 3,
    },
    {
        Title: "Ancien Portfolio",
        Created_At: new Date("2019-01-01"),
        Legend: "Ancienne version de mon portfolio ou je listait mes compétences de développeur et artiste 3d.",
        Description: "Ancienne version de mon portfolio ou je listait mes compétences de développeur et artiste 3d.",
        Images: ["images/portfolio/sjlmcms/home.jpg"],
        Tags: ["html", "css", "js", "php", "aws", "sendgrid"],
        Size: 3,
    }];

export default CSSModules(class extends Component<any, WorkState> {

    readonly state = {
        selectedProject: projects[0],
        openModal: false
    }

    ShowProject(project: IProject): void {
        this.setState({ selectedProject: project, openModal: true });
    }

    DisplayProjects = (): any => {
        return projects.map((project, index) => (
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
                        <span className="meta">{project.Created_At.toDateString()}</span>
                        <h2>{project.Title}</h2>
                        <p>{project.Legend}</p>
                    </div>
                </div>
            </div>
        ))
    }

    DisplayModal = () => {

        if (this.state.openModal) {
            return (<div>
                <div
                    onClick={() => { this.setState({ openModal: false }) }}
                    styleName="modal-overlay"></div>
                <div styleName="modal-content">
                    <img className="img-fluid" src={this.state.selectedProject.Images[0]} />
                    <h2>{this.state.selectedProject.Title}</h2>
                    <p>{this.state.selectedProject.Description}</p>
                </div>
            </div>)
        }
    }

    render() {
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
                        {this.DisplayProjects()}
                    </div>
                    {this.DisplayModal()}
                </div>
            </div>
        )
    }
}, styles);
