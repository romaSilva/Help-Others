import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link className="logo" to="/">
        help others
      </Link>
    </header>
  );
};

export default Header;
