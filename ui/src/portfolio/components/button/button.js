import React from 'react';

import './button.scss';

const Button = ({ className, children }) => {
    className = className || "";
    return (
        <div className={`flex flex-center button ${className}`}>
            {children}
        </div>
    );
}

export default Button;