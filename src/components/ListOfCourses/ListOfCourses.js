import React from "react";
import "./ListOfCourses.scss";

function ListOfCourses(item) {
  const { title, icon, desc } = item.item;
  console.log(item);
  return (
    <div className="course">
      <img src={icon} alt={title} className="course__icon" />
      <h2 className="course__title">{title}</h2>
      <p className="course__description">{desc}</p>
      <a href="/" className="course__btn">
        Get Started
      </a>
    </div>
  );
}

export default ListOfCourses;
