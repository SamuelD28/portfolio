//~~~~~~~~~~~~Dependency Declaration~~~~~~~~~//
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './portfolioCard.module.css';


const DisplayImages = (images) => {
    return (images.map((image, index) => (
        <img alt="" className="carousel-img" src={`https://portfolio-samueld28.c9users.io/portfolio/web/${image}`} key={index}/>
    )))
}

//Extraire dans un component separer!
const DisplayCarousel = (images) => {
    return(
    <div className="carousel-container">
        <span className="carousel">
            {DisplayImages(images)}
        </span>
        <div className="carousel-btn left-btn"><i className="icon left chevron"></i></div>
        <div className="carousel-btn right-btn"><i className="icon right chevron"></i></div>
    </div>
)}

const DisplayKeyFeatures = (features) => {
    return(
    <div className="project-key">
        <ul>
            {DisplayAllKeyFeatures(features)}
        </ul>
    </div>
)}

const DisplayAllKeyFeatures = (features) => {
    return features.map((feature, index) => (
        <li key={index}>
            <i className="icon checkmark"></i>{feature}
        </li>
    ))
}

const PortfolioProjectCard = (props) =>{
    return(
    <div className="portfolio-item-md over-red">
        <span className="portfolio-bg"  style={{backgroundImage: `url('https://portfolio-samueld28.c9users.io/portfolio/web/${props.work.Images[0]}')`}}></span>
        <span className="portfolio-title">{props.work.Title}</span>
        <span className="portfolio-btn">Voir Projet</span>
        <span className="portfolio-bar"></span>
        <span className="portfolio-legend">{props.work.Legend}</span>
        <div className="project-detail">
            <div className="project-container">
                {DisplayCarousel(props.work.Images)}
                <div className="project-info">
                    <div className="project-desc">{props.work.Description}</div>
                    {DisplayKeyFeatures(props.work.KeyFeatures)}
                </div>
            </div>
        </div>
    </div>
)}

export default CSSModules(PortfolioProjectCard, styles, {allowMultiple: true});
