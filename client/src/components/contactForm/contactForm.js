import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './contactForm.module.css';

const ContactForm = () => {
    return(
    <div styleName="contact-right">
        <form styleName="form" action="php/mail.php" method="post" encType="multipart/form-data">
            <div styleName="form-group">
                <input required="required" type="text" name="name" placeholder="Nom" />
            </div>
            <div styleName="form-group">
                <input required="required" type="email" name="email" placeholder="Email" />  
                <input required="required" type="text" name="sujet" placeholder="Sujet" />
            </div>
            <textarea required="required" name="message" placeholder="Message"></textarea>
            <button type="submit" name="send" styleName="send-btn">Envoyer</button>
        </form>
    </div>       
)}

export default CSSModules(ContactForm, styles, {allowMultiple: true});