import React from 'react';

import "./SkillsItem.scss";

const SkillsItem = ({ className, children, icon, title }) => {
    className = className || "";
    return (
        <div className={`skills-item flex flex-center flex-col ${className}`} >
            <i className={`skills-item-icon devicon-${icon} colored `}></i>
            <span className='skills-item-title'>{title}</span>
        </div>
    );
}

export default SkillsItem;