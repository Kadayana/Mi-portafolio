import React from 'react';
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import About from './assets/components/About';
import Skills from './assets/components/Skills';
import Projects from './assets/components/Projects';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
