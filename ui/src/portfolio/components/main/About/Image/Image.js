import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import Button from 'portfolio/components/button/button';
import "./Image.scss";

const Image = ({ className, children, links }) => {
    className = className || "";
    return (
        <div className={`image-container flex flex-col ${className}`} >
            <div>
                <img className='image-picture' src="https://avatars.githubusercontent.com/u/71182016?v=4" alt="me :)" />
            </div>
            <div className='image-links flex flex-center flex-row'>
                <a href={links.linkedin} target='_blank'><FontAwesomeIcon icon={faLinkedin} className='image-icon' /></a>
                <a href={links.github} target='_blank'><FontAwesomeIcon icon={faGithub} className='image-icon' /></a>
                <a href={require("../../../../resources/Saba Zedginidze - Resume.pdf")} download="Saba Zedginidze - Resume"><Button className="image-button">Download Resume</Button></a>
            </div>
        </div>
    );
}

export default Image;