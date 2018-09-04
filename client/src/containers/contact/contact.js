//~~~~~~~~Dependency and Declaration~~~~~~~~~~//
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './contact.module.css';
import ContactInfo from '../../components/contactInfo/contactInfo.js';
import ContactForm from '../../components/contactForm/contactForm.js';

const Contact = (props) => {
    
    return(
    <div styleName="contact-container">
        <ContactInfo />
        <ContactForm />
    </div>
)}

export default CSSModules(Contact, styles, {allowMultiple: true});
