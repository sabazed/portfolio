
import React, { useState } from 'react';

import "./ExperienceItem.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const ExperienceItem = ({ className, img, title, stack, descr, link }) => {
    className = className || "";

    const [flipped, setFlipped] = useState(false);

    return (
        <div className={`expr-item flex flex-col ${className}`} onClick={() => setFlipped(!flipped)}>
            <div className={`expr-item-wrapper ${!flipped ? "not-" : ""}flipped`}>
                <div className={`expr-item-front flex flex-col`}>
                    <img className='expr-item-img' src={img} alt='prj' />
                    <div className='expr-item-descr flex flex-col'>
                        <span className='expr-item-title flex flex-row'>
                            <span>{title}</span>
                            <a href={link} target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </span>
                        <span className='expr-item-stack'>{stack}</span>
                    </div>
                </div>
                <div className={`expr-item-back flex flex-col`}>
                    <img className='expr-item-img' src={img} alt='prj' />
                    <div className='expr-item-descr flex flex-col'>
                        <span className='expr-item-title'>{title}</span>
                        <span>{descr}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceItem;