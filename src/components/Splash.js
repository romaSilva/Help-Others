import React from "react";
import Featured from "./Featured";

const Splash = () => {
  return (
    <div className="splash">
      <Featured />
      <div className="info">
        <p>
          find a way to truly make a{" "}
          <span className="difference">difference</span>
        </p>
      </div>
    </div>
  );
};

export default Splash;
