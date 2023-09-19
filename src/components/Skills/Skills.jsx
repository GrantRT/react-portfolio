import React from 'react';
import './skills.css';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { FaAngular } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="container skills__container">
        {/* Front-end */}
        <div className="skills__frontend">
          <h3>Front-end</h3>
          <div className="skills__content">
            <article className="skills__details">
              <FaHtml5 className="skills__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="skills__details">
              <FaCss3Alt className="skills__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="skills__details">
              <SiJavascript className="skills__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skills__details">
              <FaReact className="skills__details-icon" />
              <h4>React</h4>
            </article>
            <article className="skills__details">
              <SiTypescript className="skills__details-icon" />
              <h4>TypeScript</h4>
            </article>
            <article className="skills__details">
              <FaAngular className="skills__details-icon" />
              <h4>Angular</h4>
            </article>
            <article className="skills__details">
              <SiTailwindcss className="skills__details-icon" />
              <h4>Tailwind</h4>
            </article>
            <article className="skills__details">
              <FaBootstrap className="skills__details-icon" />
              <h4>Bootstrap</h4>
            </article>
          </div>
        </div>

        {/* Back-end */}
        <div className="skills__backend">
          <h3>Back-end</h3>
          <div className="skills__content">
            <article className="skills__details">
              <FaNodeJs className="skills__details-icon" />
              <h4>NodeJS</h4>
            </article>
            <article className="skills__details">
              <SiMongodb className="skills__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="skills__details">
              <SiGraphql className="skills__details-icon" />
              <h4>GraphQL</h4>
            </article>
            <article className="skills__details">
              <GrMysql className="skills__details-icon" />
              <h4>MySQL</h4>
            </article>
          </div>
        </div>
        <div className="skills__technical">
          <h3>Technical</h3>
          <div className="skills__content">
            <article className="skills__details">
              <h4>Project Management</h4>
            </article>
            <article className="skills__details">
              <h4>Recruitment</h4>
            </article>
            <article className="skills__details">
              <h4>Training</h4>
            </article>
            <article className="skills__details">
              <h4>Customer Service</h4>
            </article>
            <article className="skills__details">
              <h4>Strategy</h4>
            </article>
            <article className="skills__details">
              <h4>Leadership</h4>
            </article>
            <article className="skills__details">
              <h4>Analytical Skills</h4>
            </article>
            <article className="skills__details">
              <h4>Problem Solving</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
