import React from 'react';
import './about.css';
import { RiTeamLine } from 'react-icons/ri';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className=".container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiTeamLine className="about__icon" />
              <h5>Management</h5>
              <small>9 years experience</small>
            </article>
            <article className="about__card">
              <RiCustomerServiceLine className="about__icon" />
              <h5>Customer Service</h5>
              <small>15 years experience</small>
            </article>
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Full Stack Web Development Certificate</h5>
              <small>University of Birmingham</small>
            </article>
          </div>
          <p>
            Hello, my name is Grant Tolhurst and I recently earned a certificate in full stack web development from The University of Birmingham. My last role was being a Depot Manager for a vehicle
            repair centre. Having been in the motor industry for 14 years I decided to make a change and pursue a career I was passionate about. In November 2021 I enrolled in The University of
            Birmingham Coding Boot Camp, studying front-end and back-end technologies through a dynamic full stack curriculum. I am extremly excited and eager to begin my journey as a web developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
