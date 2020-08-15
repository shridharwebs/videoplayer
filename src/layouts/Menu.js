import React from "react";
import { Link } from "react-router-dom";
import "../components/CourseStructure.css";

const Menu = () => {
  return (
    <div className="container-fluid bg-info mainnav">
      <nav className="container navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          React Videoplayer
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item d-none">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
