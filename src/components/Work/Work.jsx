import React from 'react';
import './work.css';
import MacroMealsImg from '../../assets/Images/macro-meals.jfif';
import TravellyImg from '../../assets/Images/travelly.png';

const projectsArr = [
  {
    id: 1,
    image: TravellyImg,
    title: 'Travelly',
    description:
      'A trip finder application fused together with a social network functionality. We have gamified the travel experience. Travel the world and earn unique badges. Our smart technology will learn your travel goals and display trips that you will love.',
    technologies: 'HTML, CSS , Javascript, NodeJS, Express, AWS S3 Bucket, Socket IO, Chakra UI, React, GraphQL, MongoDB Atlas, Mongoose.',
    github: 'https://github.com/GrantRT/travelly',
    demo: 'https://gentle-lowlands-70428.herokuapp.com/',
    disabled: false,
  },
  {
    id: 2,
    image: MacroMealsImg,
    title: 'Macro Meals',
    description:
      'An application / website that takes in user values, and generates daily calorie requirements based on the users desired health goal. It presents the user with recipes that will allow the user to meet their daily calorie requirements and then creates a virtual dashboard allowing the user to test, randomise and save their recipes.',
    technologies: 'HTML, CSS, Tailwind, JavaScript, jQuery.',
    github: 'https://github.com/GrantRT/Macro-Meals',
    demo: 'https://grantrt.github.io/Macro-Meals/',
    disabled: false,
  },
];

const Work = () => {
  return (
    <section id="work">
      <h2>My Work</h2>

      <div className="container work__container">
        {projectsArr.map(({ id, image, title, description, technologies, github, demo, disabled }) => {
          return (
            <article key={id} className="work__project">
              <div className="work__project-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Technology Used: {technologies}</p>
              <div className="work__project-container">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Deployed
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
