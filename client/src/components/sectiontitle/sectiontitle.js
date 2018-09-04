import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './sectiontitle.module.css';

const SectionTitle = (props) => {
    return(
    <div styleName="title-wrapper">
        <span styleName="title-border"></span>
        <span styleName="title-info">
            <span styleName="legend">{props.title}</span>
            <span styleName="title">{props.menu}</span>
        </span>
    </div>
    )
}

export default CSSModules(SectionTitle, styles, {allowMultiple: true});