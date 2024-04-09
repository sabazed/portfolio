import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import "./Footer.scss";

const Footer = ({ className, children, links  }) => {
    className = className || "";
    return (
        <footer className='footer flex flex-col flex-center'>
            <div className='footer-links flex flex-row flex-center'>
                <a href={links.linkedin} target='_blank'><FontAwesomeIcon icon={faLinkedin} className='footer-icon' /></a>
                <a href={links.github} target='_blank'><FontAwesomeIcon icon={faGithub} className='footer-icon' /></a>
            </div>
            <div className='footer-credits'>
                <span>Saba Zedginidze © 2024</span>
            </div>
        </footer>
    );
}

export default Footer;