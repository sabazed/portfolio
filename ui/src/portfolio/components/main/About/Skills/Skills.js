import React from 'react';

import SkillsItem from './SkillsItem';
import "./Skills.scss";

const Skills = ({ className, children, skills }) => {
    className = className || "";
    return (
        <div className={`skills-container flex flex-col ${className}`} >
            <h3 className="header skills-title">Skills</h3>
            <div className='skills-table'>
                {skills.map(s => <SkillsItem key={s.title} icon={s.icon} title={s.title}/>)}
            </div>
        </div>
    );
}

export default Skills;