//~~~~~~~~Dependency and Declaration~~~~~~~~~~//
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './contactInfo.module.css';

const ContactInfo = (props) => {
    return(
    <div styleName="contact-left">
        <div styleName="contact-info">
            <span styleName="contact-icon"><i className="icon map marker alternate"></i></span>
            <div>
                <span><b>Adresse</b><br/>
                <hr />
                Sainte-Catherine,<br /> QC J5C 1J8,<br /> Canada</span>
            </div>
        </div>
        <div styleName="contact-info">
            <span styleName="contact-icon"><i className="icon phone"></i></span>
            <div>
                <span> <b>Téléphone </b><br/>
                <hr />
                514-688-6447</span>
            </div>
        </div>
        <div styleName="contact-info">
            <span styleName="contact-icon"><i className="icon mail"></i></span>
            <div>
                <span> <b>Question ?</b><br/>
                <hr />
                samuel_personnel@outlook.com</span>
            </div>
        </div>
    </div>
)}

export default CSSModules(ContactInfo, styles, {allowMultiple: true});