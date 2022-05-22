import React from 'react';
import './work.css';
import IMG1 from '../../assets/Images/macro-meals.jfif';
import IMG2 from '../../assets/Images/moodtracker.png';
import IMG3 from '../../assets/Images/techblog.png';

const projectsArr = [
  {
    id: 1,
    image: IMG1,
    title: 'Macro Meals',
    github: 'https://github.com/GrantRT/Macro-Meals',
    demo: 'https://grantrt.github.io/Macro-Meals/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Mood Tracker',
    github: 'https://github.com/GrantRT/Mood-Tracker',
    demo: 'https://mood-tracker-gkl.herokuapp.com/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tech Blog',
    github: 'https://github.com/GrantRT/Tech-Blog',
    demo: 'https://gt-tech-blog.herokuapp.com/',
  },
];

const Work = () => {
  return (
    <section id="work">
      <h2>My Work</h2>

      <div className="container work__container">
        {projectsArr.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="work__project">
              <div className="work__project-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="work__project-container">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
