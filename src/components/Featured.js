import React, { useEffect, useContext } from "react";
import globalContext from "../contexts/globalContext";
import { Link } from "react-router-dom";

const Featured = () => {
  const { getFeatured, featured } = useContext(globalContext);

  useEffect(() => {
    getFeatured();
  }, []);

  //Select a random project to be featured n the landing page
  const randomNumber = Math.floor(Math.random() * 10);
  const selectedOrganization = featured[randomNumber];

  //Return only if a random organization was successfully selected
  return selectedOrganization ? (
    <div className="featured">
      <article className="card">
        <img
          className="featured-img"
          src={selectedOrganization.image.imagelink[2].url}
          alt="project image"
        />
        <p className="featured-title">{selectedOrganization.title}</p>
      </article>
      <Link className="button" to="/search">
        Find more organizations
      </Link>
    </div>
  ) : null;
};

export default Featured;
