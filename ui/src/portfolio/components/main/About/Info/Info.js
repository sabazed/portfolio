import React from 'react';

import "./Info.scss";

const Info = ({ className, children, aboutMeText }) => {
    className = className || "";
    return (
        <div className={`info-container flex flex-col ${className}`} >
            <h3 className="header info-title">About Me</h3>
            <p className="info-text">{aboutMeText}</p>
        </div>
    );
}

export default Info;