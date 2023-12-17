
import React from 'react';
import Home from '../components/home';
import Qualification from '../components/qualification';
import Skills from '../components/skills'
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/Footer'

function Index() {
  return (
    <div id="index-container">
      <Home />
      <Qualification />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Index;
