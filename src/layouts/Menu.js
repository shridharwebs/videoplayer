import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="container">
      <nav class="nav">
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default Menu;
