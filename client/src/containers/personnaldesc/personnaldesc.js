import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './personnaldesc.module.css';

class PersonnalDesc extends Component
{
    render(){
    return(
    <div id="my-info">
        <img alt="" className="my-img" src="/img/profil.jpg" />
        <p className="my-desc">Bien l'bonjour, je m'appel Samuel Dubé. Je suis présentement un DEC en informatique au cégep de Saint-Jean-sur-Richelieu. 
        Je me passione pour le dévelopement Web ainsi que la création 3d. 
        Mon fruit favori est la banane.</p>
    </div>
    )}
}

export default CSSModules(PersonnalDesc, styles, {allowMultiple: true});