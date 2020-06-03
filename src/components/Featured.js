import React, { useEffect, useContext } from "react";
import ProjectCard from "./ProjectCard";
import globalContext from "../contexts/globalContext";
import { Link } from "react-router-dom";

const Featured = () => {
  const { getFeatured, featured } = useContext(globalContext);

  useEffect(() => {
    getFeatured();
  }, []);

  //Select a random project to be featured n the landing page
  const randomNumber = Math.floor(Math.random() * 9);
  const selectedOrganization = featured[randomNumber];

  //Return only if a random organization was successfully selected
  return selectedOrganization ? (
    <div className="featured">
      <ProjectCard project={selectedOrganization} />
      <Link className="button" to="/search">
        Find more organizations
      </Link>
    </div>
  ) : null;
};

export default Featured;
