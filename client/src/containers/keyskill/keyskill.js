import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './keyskill.module.css';
import {Ajax} from '../../shared/utility.js';
import KeySkillCard from '../../components/keyskillCard.js';

class KeySkill extends Component
{
    
    componentDidMount()
    {
        let quality = Ajax.GetData()
    }
    
    DisplayKeySkills()
    {
    }
    
    render(){
    return(
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
    )}
}

export default CSSModules(KeySkill, styles, {allowMultiple: true})