import React from "react";
import ProjectCard from "../components/projectCard/ProjectCard";
import { projects } from "../helpers/projectsList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Проекты</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                img={project.img}
                index={index}
                skills={project.skills}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
