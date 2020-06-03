import React from "react";
import spinner from "./Spinner.gif";

function Spinner() {
  return (
    <div className="spinner-container">
      <img src={spinner} alt="Loading" style={spinnerStyle} />
    </div>
  );
}

const spinnerStyle = {
  width: "150px",
  margin: "150px",
  display: "block",
};

export default Spinner;
