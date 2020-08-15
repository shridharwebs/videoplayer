import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/CourseStructure.css";

const CourseStructure = (props) => {
  const courseName = props.match.params.coursename;

  const courses = {
    reactjs: [
      { title: "React Js video 1", vid: "8y4Dr9jJtF0" },
      { title: "React Js video 2", vid: "10FNqoPpNbE" },
      { title: "React Js video 3", vid: "RUku45vpSDU" },
    ],
    nodejs: [
      { title: "React Js video 1", vid: "10FNqoPpNbE" },
      { title: "React Js video 2", vid: "RUku45vpSDU" },
      { title: "React Js video 3", vid: "8y4Dr9jJtF0" },
    ],
  };

  const [vid, uid] = useState(courses[courseName][0].vid);
  const [title, utit] = useState(courses[courseName][0].title);
  const [counter, setCounter] = useState(0);

  console.log(vid);

  const renderVideo = () => {
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item bg-dark"
          src={"//www.youtube.com/embed/" + vid + "?rel=0"}
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  return (
    <div className="container">
      <div class="row">
        <div className="container-fluid">
          <br />
          <br />
          <h4 className="text-center">
            Welcome to <b>{courseName}</b> course..
          </h4>
          <br />
          <br />
        </div>
        <div className="col-md-8 col-sm-3">
          {renderVideo()}
          <br />
          <h4>{title}</h4>
          <br />
          <br />
        </div>

        <div className="col-md-4 col-sm-3">
          <ul className="list-group videolist">
            {courses[courseName].map((item, index) => {
              return (
                <li
                  className={
                    counter == index
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                  onClick={() => {
                    uid(item.vid);
                    utit(item.title);
                    setCounter(index);
                  }}
                >
                  <Link>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseStructure;
