import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";
import globalContext from "../contexts/globalContext";

const Project = () => {
  const { selected } = useContext(globalContext);

  return (
    <div className="project">
      <div className="project-header">
        <div className="project-title">{selected.title}</div>
        <Link className="project-icon" to="/search">
          <BsBoxArrowLeft />
        </Link>
      </div>
      <div className="project-country">{selected.country}</div>
      <div className="project-body">
        <img
          className="project-img"
          src={selected.image.imagelink[3].url}
          alt="project"
        />
        <div className="project-info">
          <div className="project-activities">{selected.activities}</div>
          <a
            className="button"
            target="_blank"
            style={{
              minWidth: "150px",
              textAlign: "center",
              alignSelf: "flex-end",
              marginRight: "30px",
            }}
            href={selected.projectLink}
          >
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
