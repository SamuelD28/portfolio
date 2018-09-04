//~~~~~~~~~~~~Dependency Declaration~~~~~~~~~//
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './portfolioCard.module.css';


const DisplayImages = (images) => {
    return (images.map((image, index) => (
        <img alt="" styleName="carousel-img" src={`https://portfolio-samueld28.c9users.io/portfolio/web/${image}`} key={index}/>
    )))
}

//Extraire dans un component separer!
const DisplayCarousel = (images) => {
    return(
    <div styleName="carousel-container">
        <span styleName="carousel">
            {DisplayImages(images)}
        </span>
        <div styleName="carousel-btn left-btn"><i className="icon left chevron"></i></div>
        <div styleName="carousel-btn right-btn"><i className="icon right chevron"></i></div>
    </div>
)}

const DisplayKeyFeatures = (features) => {
    return(
    <div styleName="project-key">
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
    <div styleName="portfolio-item-md over-red">
        <span styleName="portfolio-bg"  style={{backgroundImage: `url('https://portfolio-samueld28.c9users.io/portfolio/web/${props.work.Images[0]}')`}}></span>
        <span styleName="portfolio-title">{props.work.Title}</span>
        <span styleName="portfolio-btn">Voir Projet</span>
        <span styleName="portfolio-bar"></span>
        <span styleName="portfolio-legend">{props.work.Legend}</span>
        <div styleName="project-detail">
            <div styleName="project-container">
                {DisplayCarousel(props.work.Images)}
                <div styleName="project-info">
                    <div styleName="project-desc">{props.work.Description}</div>
                    {DisplayKeyFeatures(props.work.KeyFeatures)}
                </div>
            </div>
        </div>
    </div>
)}

export default CSSModules(PortfolioProjectCard, styles, {allowMultiple: true});
