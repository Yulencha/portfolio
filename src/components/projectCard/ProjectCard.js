import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ title, img, index, skills }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
        <h5 className="project__subtitle">{skills}</h5>
      </li>
    </NavLink>
  );
};

export default ProjectCard;
