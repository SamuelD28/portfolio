import React from 'react';

const KeySkillCard = (props) => {
    return(
    <div className="key-skill">
        <img alt="" className="key-img" src="/img/icon/search-icon.png" />
        <span className="key-title">{props.Title}</span>
        <span className="key-desc">{props.Description}</span>
    </div>
    )
}

export default KeySkillCard;