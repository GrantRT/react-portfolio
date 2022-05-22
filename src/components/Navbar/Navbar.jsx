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
      <a href="https://docs.google.com/document/d/1hGVYzLr4yv6v9WVszpq0dTMzpykPEW394rRLqOGMKOE/edit?usp=sharing" target="_blank">
        CV
      </a>
    </nav>
  );
};

export default Navbar;
