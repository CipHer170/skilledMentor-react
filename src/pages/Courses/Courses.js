import React from "react";
import BaseContainer from "../../components/BaseContainer/BaseContainer";
import ListOfCourses from "../../components/ListOfCourses/ListOfCourses";
import { courses } from "../../data";
import "./Courses.scss";

function Courses() {
  return (
    <div className="courses">
      <BaseContainer>
        <div className="courses__container">
          <h2 className="courses__title">
            Check out our most popular courses!
          </h2>
          {courses?.map((items) => {
            return <ListOfCourses item={items} key={items.id} />;
          })}
        </div>
      </BaseContainer>
    </div>
  );
}

export default Courses;
