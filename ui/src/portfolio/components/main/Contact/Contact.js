import React from 'react';
import Section from 'portfolio/components/section/Section';

import "./Contact.scss";
import Button from 'portfolio/components/button/button';
import Footer from 'portfolio/components/footer/Footer';

const Contact = ({ id, className, children }) => {
    className = className || "";
    return (
        <Section id={id} className="contact-section flex-col flex-center">
            <div className='contact-wrapper flex flex-col flex-center'>
                <h1 className='contact-title header'>Contact</h1>
                <h3 className='contact-descr'>Leave a message</h3>
            </div>
            <div className='contact-wrapper contact-form-wrapper flex flex-col'>
                <form className="contact-form flex flex-col flex-center" action="#" method="post"> 
                    <input className="contact-form-name" name="name" type="text" placeholder="Name" required />
                    <input className="contact-form-email" name="email" type="email" placeholder="Email" required />
                    <textarea className="contact-form-message" name="message" placeholder="Message" rows="5" required></textarea>
                </form>
                <div className='contact-btn'>
                    <Button>Submit</Button>
                </div>
            </div>
        </Section>
    );
}

export default Contact;