"use cilent";
import { useState } from "react";
import CoursesSearch from "./CoursesSearch";

function Courses({ courses }) {
  const [rep, setRep] = useState();

  const getRep = (rep) => {
    setRep(rep);
  };

  return (
    <div className="search-container">
      <div className="courses ">
        {rep?.length
          ? rep.map((course) => {
              return (
                <div key={course.id} className="courses card">
                  <h2>{course.title}</h2>
                  <p>{course.description}</p>
                  <span>{course.level}</span>
                  <a href="#">{course.link}</a>
                </div>
              );
            })
          : courses.map((course) => {
              return (
                <div key={course.id} className="courses card">
                  <h2>{course.title}</h2>
                  <p>{course.description}</p>
                  <span>{course.level}</span>
                  <a href="#">{course.link}</a>
                </div>
              );
            })}
      </div>
      <CoursesSearch getRep={getRep} />
    </div>
  );
}

export default Courses;
