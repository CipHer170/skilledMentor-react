import React from "react";
import BaseContainer from "../BaseContainer/BaseContainer";

function HeroTitle() {
  return (
    <div className="heroPage__titles">
      <BaseContainer>
        <div className="heroPage__title">Maximize skill, minimize budget</div>
        <div className="heroPage__text">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </div>
        <button className="btn btn__redgradient">Get started</button>
      </BaseContainer>
    </div>
  );
}

export default HeroTitle;
