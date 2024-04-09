import React from 'react';

import './Section.scss';

const Section = ({ id, className, children }) => {
    className = className || "";
    return (
        <div id={id} className={`flex flex-center section ${className}`}>
            {children}
        </div>
    );
}

export default Section;