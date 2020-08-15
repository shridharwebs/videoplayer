import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/reactjs">React js course</Link>
        </li>
        <li>
          <Link to="/nodejs">Node js course</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
