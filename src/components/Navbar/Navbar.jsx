import React from 'react';
import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNavItem('#home')} className={activeNavItem === '#home' ? 'active' : ''}>
        Home
      </a>
      <a href="#about" onClick={() => setActiveNavItem('#about')} className={activeNavItem === '#about' ? 'active' : ''}>
        About
      </a>
      <a href="#work" onClick={() => setActiveNavItem('#work')} className={activeNavItem === '#work' ? 'active' : ''}>
        Work
      </a>
      <a href="#contact" onClick={() => setActiveNavItem('#contact')} className={activeNavItem === '#contact' ? 'active' : ''}>
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
