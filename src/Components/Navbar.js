import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-item-text" to="/">
        First Page
      </Link>
      <Link className="navbar-item-text" to="/second">
        Second Page
      </Link>
    </div>
  );
};

export default Navbar;
