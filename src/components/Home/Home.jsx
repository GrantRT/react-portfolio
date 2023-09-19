import React from 'react';
import './home.css';
import PHOTO from '../../assets/Images/profile-photo.jpg';

const Home = () => {
  return (
    <>
      <header id="home">
        <div className="container header__container">
          <h3>Hi, I'm</h3>
          <h1>Grant Tolhurst</h1>
          <h2 className="light-colour">Fullstack Software Developer</h2>
          <img src={PHOTO} className="photo" alt="Grant Tolhurst" />
        </div>
      </header>
    </>
  );
};

export default Home;
