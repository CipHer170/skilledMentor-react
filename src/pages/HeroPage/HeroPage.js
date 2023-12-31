import React from "react";
import TotalFigure from "../../components/TotalFigureHero/TotalFigure";
import BaseContainer from "../../components/BaseContainer/BaseContainer";
import "../HeroPage/HeroPage.scss";
import HeroTitle from "../../components/HeroTitle/HeroTitle";

function HeroPage() {
  return (
    <div className="heroPage">
      <BaseContainer>
        <div className="heroPage__container">
          <HeroTitle />
          <TotalFigure />
        </div>
      </BaseContainer>
    </div>
  );
}

export default HeroPage;
