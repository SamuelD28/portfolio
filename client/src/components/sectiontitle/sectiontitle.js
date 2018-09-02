import React from 'react';

const SectionTitle = (props) => {
    return(
    <div className="title-wrapper">
        <span className="title-border"></span>
        <span className="title-info">
            <span className="legend">{props.title}</span>
            <span className="title">{props.menu}</span>
        </span>
    </div>
    )
}

export default SectionTitle;