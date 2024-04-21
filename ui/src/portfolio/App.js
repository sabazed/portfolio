import React from 'react';
import Navbar from './components/header/Navbar';
import Intro from './components/main/Intro/Intro';
import About from './components/main/About/About';
import Experience from './components/main/Experience/Experience';
import Contact from './components/main/Contact/Contact';

import Content from './resources/content.json';
import Footer from './components/footer/Footer';

const App = () => {

    const links = { github: Content.githubLink, linkedin: Content.linkedinLink };

    return (
        <div id="portfolio">
            <Intro id="intro" />

            <span id='navbar'></span>
            <Navbar />

            <About 
                id="about"
                links={links}
                aboutMeText={Content.aboutMeText} 
                skills={Content.skills} 
            />

            <Experience id="expr" projects={Content.githubRepos} links={links} />

            <Contact id="contact" />

            <Footer links={links} />
        </div>
    );
}

export default App;