import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faJs, faReact, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
import '../assests/styling/Skills.css'
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const SkillsSection = () => {
  const skills = [
    { 
        title: "HTML", 
        icon: faHtml5, 
        proficiency: 1,
    },
    { 
        title: "CSS", 
        icon: faCss3, 
        proficiency: 0.9, 
    },
    {
      title: "JavaScript",
      icon: faJs,
      proficiency: 0.6,
    },
    {
      title: "React",
      icon: faReact,
      proficiency: 0.5,
    },
    {
      title: "Node.js",
      icon: faNode,
      proficiency: 0.4,
    },
    { 
        title: "MongoDB", 
        icon: faDatabase, 
        proficiency: 0.2, 
      },
  ];      
  
const SkillItem = ({ title, icon, proficiency }) => {
  return (
    <div className="skill-item">
      <div className="skill-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="skill-info">
        <h3 className="skill-title">{title}</h3>
        <div className="skill-proficiency">
          <progress value={proficiency * 100} max="100"></progress>
        </div>
      </div>
    </div>
  );
};


  return (
    <section className="skills-section">
      <h2 className="section-title">Skills &amp; Technologies</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <SkillItem key={skill.title} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

