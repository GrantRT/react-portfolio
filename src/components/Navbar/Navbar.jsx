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
      <a href="#skills" onClick={() => setActiveNavItem('#skills')} className={activeNavItem === '#skills' ? 'active' : ''}>
        Skills
      </a>
      <a href="#work" onClick={() => setActiveNavItem('#work')} className={activeNavItem === '#work' ? 'active' : ''}>
        Work
      </a>
      <a href="https://docs.google.com/document/d/15rP2R1jbmbO-PzuXSbyiP_133B5DLy9sAnxaIdL6zaU/edit?usp=sharing" target="_blank" rel="noreferrer">
        CV
      </a>
    </nav>
  );
};

export default Navbar;
