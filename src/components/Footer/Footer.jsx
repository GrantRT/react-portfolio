import React from 'react';
import './footer.css';
import { FaGithubSquare } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="footer__contact">
        <a href="https://github.com/GrantRT" target="_blank" rel="noreferrer">
          <FaGithubSquare />
        </a>
        <a href="mailto:granto_92@hotmail.com" target="_blank" rel="noreferrer">
          <MdAlternateEmail />
        </a>
        <a href="https://www.linkedin.com/in/grant-tolhurst/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </>
  );
};

export default Footer;
