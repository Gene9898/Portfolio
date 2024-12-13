import React from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div id="projects" className={`contentDiv`}>
      <p className="contentTitle">
        <span className="contentTitleText">PROJECTS</span>
      </p>
      <ProjectCard />
    </div>
  );
};

export default Projects;
