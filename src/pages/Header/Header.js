import React from "react";
import image from "../../assets/logo-dark.svg";
import BaseContainer from "../../components/BaseContainer/BaseContainer";
import "../Header/Header.scss";

function Header() {
  return (
    <div>
      <BaseContainer>
        <div className="header">
          <img src={image} alt="retry" />
          <button className="btn btn__darkblue">Get started</button>
        </div>
      </BaseContainer>
    </div>
  );
}

export default Header;
