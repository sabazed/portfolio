import React from 'react';
import Section from 'portfolio/components/section/Section';

import "./Intro.scss";

const Intro = ({ id, className, children }) => {
    className = className || "";
    return (
        <Section id={id} className={"intro-section flex-col"}>
            <h1 className='intro-title'>Hello! I am Saba</h1>
            <h3 className='intro-descr'>I'm Full-Stack developer</h3>
        </Section>
    );
}

export default Intro;