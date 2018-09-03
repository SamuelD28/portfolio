import React from 'react';

const KeySkillCard = (props) => {
    return(
    <div className="key-skill">
        <img alt="" className="key-img" src={props.image} />
        <span className="key-title">{props.title}</span>
        <span className="key-desc">{props.description}</span>
    </div>
    )
}

export default KeySkillCard;