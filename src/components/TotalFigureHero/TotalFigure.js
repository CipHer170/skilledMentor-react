import React from "react";
import "../TotalFigureHero/TotalFigure.scss";
import imageHero from "../../assets/image-hero.png";
function TotalFigure() {
  return (
    <div className="figure">
      <div className="figure__blue"></div>
      <div className="figure__red">
        <img src={imageHero} alt="figure__hero" className="figure__hero" />
      </div>
      <div className="figure__info members">
        Members <br />
        29k
      </div>
      <div className="figure__info hours">
        Course Hours <br /> 1,451
      </div>
    </div>
  );
}

export default TotalFigure;
