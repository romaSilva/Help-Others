import React, { useEffect, useContext } from "react";
import ProjectCard from "./ProjectCard";
import globalContext from "../contexts/globalContext";

const Results = () => {
  const { featured, getFeatured, results } = useContext(globalContext);

  useEffect(() => {
    getFeatured();
  }, []);

  return results.length ? (
    <div className="grid">
      {results.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  ) : (
    <div className="grid">
      {featured.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Results;
