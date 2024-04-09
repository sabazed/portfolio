import React from 'react';
import Section from 'portfolio/components/section/Section';

import "./Experience.scss";
import ExperienceTable from './ExperienceTable';
import Button from 'portfolio/components/button/button';

const Experience = ({ id, className, projects }) => {
    className = className || "";
    return (
        <Section id={id} className={"expr-section flex-col"}>
            <h3 className='expr-title header'>Projects</h3>
            <ExperienceTable projects={projects} />
            <Button className="expr-button">Show More</Button>
        </Section>
    );
}

export default Experience;