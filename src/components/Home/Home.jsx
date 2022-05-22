import React from 'react';
import './home.css';
import PHOTO from '../../assets/Images/profile-photo.jpg';
import { FaGithubSquare } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <header id="home">
        <div className="container header__container">
          <h3>Hi, I'm</h3>
          <h1>Grant Tolhurst</h1>
          <h2 className="light-colour">Fullstack Web Developer / Software Engineer</h2>
          <img src={PHOTO} className="photo" alt="Grant Tolhurst" />
          <div className="home__contact">
            <a href="https://github.com/GrantRT" target="_blank">
              <FaGithubSquare />
            </a>
            <a href="mailto:granto_92@hotmail.com" target="_blank">
              <MdAlternateEmail />
            </a>
            <a href="https://www.linkedin.com/in/grant-tolhurst/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
