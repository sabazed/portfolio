import React from 'react';

import "./About.scss";
import Skills from './Skills/Skills';
import Info from './Info/Info';
import Image from './Image/Image';
import Section from 'portfolio/components/section/Section';

const About = ({ id, className, children, aboutMeText, skills, links }) => {
    className = className || "";
    return (
        <Section id={id} className={"about-section"}>
            <div>
                <Image className="container container-left" links={links} />
            </div>
            <div className='info-section flex flex-col'>
                <Info className="container container-right" aboutMeText={aboutMeText}/>
                <Skills className="container container-right" skills={skills}/>
            </div>
        </Section>
    );
}

export default About;