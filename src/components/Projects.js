// Projects.js
import React, { useState } from "react";
import "../assests/styling/Projects.css";

import projectImg1 from "../assests/styling/images/Projects-Img/Guess-my-number.png";
import projectImg2 from "../assests/styling/images/Projects-Img/LUDO.png";
import projectImg3 from "../assests/styling/images/Projects-Img/Portfolio.png";
import projectImg4 from "../assests/styling/images/Projects-Img/Password-generator.png";
import projectImg5 from '../assests/styling/images/Projects-Img/currency-convertor.png'

import GuessMyNumber_Video from '../assests/video/Guess-My-Number.mp4'
import LUDO_Video from "../assests/video/LUDO.mp4";
import Portfolio from '../assests/video/Portfolio.mp4'
import Password_Generator from '../assests/video/Password-Generator.mp4'
import Currency_Convertor from '../assests/video/Currency-Convertor.mp4'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const projects = [
    {
      image: projectImg1,
      title: "Guess My Number",
      description: "A Simple beginner-friendly project, where the user guesses the number. <br><strong>Tech used : </strong> HTML || CSS || Javascript",
      link: "https://github.com/kartik2318/GuessTheNumber",
      video: GuessMyNumber_Video,
    },
    {
      image: projectImg2,
      title: "LUDO",
      description: "A Simple LUDO game. The one who reaches the 100 points first, will be the winner. <br><strong>Tech used : </strong> HTML || CSS || Javascript",
      link: "https://github.com/kartik2318/PigGame-...LUDO-",
      video: LUDO_Video,
    },
    {
      image: projectImg3,
      title: "My Portfolio",
      description: "A beginner friendly, Portfolio Website, built with ReactJS. <br><strong>Tech used : </strong> ReactJS",
      link: "https://my-portfolio-4cd40.web.app/",
      video: Portfolio,
    },
    {
      image: projectImg4,
      title: "Password Generator",
      description: "A simple Password Generator Web App, where the password is generated randomly, according to user requirement (i.e. what length the password should have, to include numbers and special characters or not)",
      link: "https://github.com/kartik2318/password-generator",
      video: Password_Generator,
    },
    {
      image: projectImg5,
      title: "Currency Convertor",
      description: "A simple beginner friendly currency-convertor web app built completely using react.js. Where the user enters the amount and selects the currency type from the drop-down menu, FROM which TO which currency the conversion should take place, so that to achieve the expected output. 😃✌",
      link: "https://github.com/kartik2318/currency-convertor",
      video: Currency_Convertor,
    },
  ];

  return (
    <div id="projects-section" className="projects-container">
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            className={`project ${hoveredProject === index ? "hovered" : ""}`}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={project.image}
              alt="Project Images"
              className={`project-image ${
                hoveredProject === index ? "hidden" : ""
              }`}
            />
            <video
              autoPlay
              className="project-video"
              src={project.video}
              loop
              muted
              playsInline
            />
            <h3>{project.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: project.description }} />
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

