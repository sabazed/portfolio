import React from 'react';
import Navbar from './components/header/Navbar';
import Intro from './components/main/Intro/Intro';
import About from './components/main/About/About';
import Experience from './components/main/Experience/Experience';
import Contact from './components/main/Contact/Contact';

import Content from './resources/content.json';
import Projects from './resources/projects.json';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <>
            <Intro id="intro" />

            <span id='navbar'></span>
            <Navbar />

            <About 
                id="about"
                links={{ github: Content.githubLink, linkedin: Content.linkedinLink }} 
                aboutMeText={Content.aboutMeText} 
                skills={Content.skills} 
            />

            <Experience id="expr" projects={Projects}/>

            <Contact id="contact" />

            <Footer links={{ github: Content.githubLink, linkedin: Content.linkedinLink }} />
        </>
    );
}

export default App;