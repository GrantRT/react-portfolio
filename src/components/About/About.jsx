import React from 'react';
import './about.css';
import { FaCode } from 'react-icons/fa';
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
              <FaCode className="about__icon" />
              <h5>Front End Developer</h5>
              <small>1+ years experience</small>
            </article>
            <article className="about__card">
              <RiTeamLine className="about__icon" />
              <h5>Management</h5>
              <small>9 years experience</small>
            </article>
            <article className="about__card">
              <RiCustomerServiceLine className="about__icon" />
              <h5>Customer Service</h5>
              <small>14 years experience</small>
            </article>
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Full Stack Web Development Certificate</h5>
              <small>University of Birmingham</small>
            </article>
          </div>
          <p>
            A personable and passionate full stack software developer with over 1 year experience as a Frontend Software Developer, 9+ years experience in management and 14+ years experience in
            customer service. I earned a certificate in full stack web development from The University of Birmingham in 2022. Able to work in fast-paced and diverse team environments and can adapt to
            new languages, technologies and frameworks quickly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
