import React, { useContext } from "react";
import { Link } from "react-router-dom";
import globalContext from "../contexts/globalContext";

const ProjectCard = ({ project }) => {
  const { getSelected } = useContext(globalContext);

  return (
    <Link
      className="card"
      to={`/project/${project.id}`}
      onClick={() => getSelected(project.id)}
    >
      <img
        className="featured-img"
        src={project.image.imagelink[3].url}
        alt="project"
      />
      <h2 className="featured-title">{project.title}</h2>
      <h3 className="featured-country">{project.country}</h3>
    </Link>
  );
};

export default ProjectCard;
