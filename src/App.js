import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import CourseStructure from "./components/CourseStructure";
import Menu from "./layouts/Menu";

function App() {
  return (
    <Fragment>
      <Router>
        <Menu />
        <Route exact path="/" component={Home}></Route>
        <Route path="/:coursename" component={CourseStructure}></Route>
      </Router>
    </Fragment>
  );
}

export default App;
