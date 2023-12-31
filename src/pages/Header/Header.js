import React from "react";
import BaseContainer from "../../components/BaseContainer/BaseContainer";
import "../Header/Header.scss";

function Header() {
  return (
    <div className="header">
      <BaseContainer>
        <div className="header__container">
          <div className="logo"> skilled</div>
          <button className="btn btn__darkblue">Get started</button>
        </div>
      </BaseContainer>
    </div>
  );
}

export default Header;
