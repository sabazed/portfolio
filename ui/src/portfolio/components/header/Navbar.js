import React from 'react';

import "./Navbar.scss";

const Navbar = ({ className, children,  }) => {
    className = className || "";
    return (
        <header className="flex flex-row navbar">
        <nav className="flex flex-row flex-center navbar-buttons">
            <a id="intro-link" className="navbar-button" href="#intro">Home</a>
            {/* <a id="about-link" className="navbar-button navbar-button-active" href="#about">About</a>       Use navbar location for about section */}
            <a id="about-link" className="navbar-button navbar-button-active" href="#navbar">About</a>
            <a id="expr-link" className="navbar-button" href="#expr">Experience</a>
            <a id="cont-link" className="navbar-button" href="#contact">Contact</a>
        </nav>
    </header>
    );
}

export default Navbar;