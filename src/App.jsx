import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Work from './components/Work/Work';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Skills />
      <Work />
      <Footer />
    </>
  );
}

export default App;
