import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}

export default App;
