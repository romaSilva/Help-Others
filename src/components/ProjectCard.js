import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <img
        className="featured-img"
        src={project.image.imagelink[2].url}
        alt="project"
      />
      <h2 className="featured-title">{project.title}</h2>
      <h3 className="featured-country">{project.country}</h3>
    </div>
  );
};

export default ProjectCard;
