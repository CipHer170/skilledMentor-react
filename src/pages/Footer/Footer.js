import React from "react";
import BaseContainer from "../../components/BaseContainer/BaseContainer";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <BaseContainer>
        <div className="footer__container">
          <div className="logo"> skilled</div>
          <button className="btn btn__bluegradient">Get started</button>
        </div>
      </BaseContainer>
    </div>
  );
}

export default Footer;
