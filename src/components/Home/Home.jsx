import React from 'react';
import './home.css';
import PHOTO from '../../assets/Images/profile-photo.jpg';

const Home = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hi, I'm</h5>
        <h1>Grant Tolhurst</h1>
        <h5 className="light-colour">Fullstack Web Developer / Software Engineer</h5>
        <img src={PHOTO} className="photo" alt="Grant Tolhurst" />
      </div>
    </header>
  );
};

export default Home;
