import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="col-md-6">
        <br />
        <br />
        <ul class="list-group">
          <li class="list-group-item border-0 d-flex justify-content-between align-items-center">
            <Link to="/reactjs">React js course</Link>
            <span class="badge badge-primary badge-pill">14</span>
          </li>
          <li class="list-group-item border-0 d-flex justify-content-between align-items-center">
            <Link to="/nodejs">Node js course</Link>
            <span class="badge badge-primary badge-pill">2</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
