import React from 'react';

import "./ExperienceTable.scss";
import ExperienceItem from './ExperienceItem';

const ExperienceTable = ({ className, projects }) => {
    className = className || "";
    
    const getImg = (img) => {
        return `./images/proj/${img}`
    }

    return (
        <div className={`expr-table flex flex-row ${className}`} >
            {projects.map(p => <ExperienceItem key={p.title} img={getImg(p.img)} title={p.title} stack={p.stack} descr={p.descr} link={p.link} />)}
        </div>
    );
}

export default ExperienceTable;