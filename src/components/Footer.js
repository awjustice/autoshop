import React from "react";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div id="invisible" hidden>
        <a href="/">
          <span>|</span>
          Justice Web Design&nbsp;&copy;2021
          <span>|</span>
        </a>
      </div>
      <div id="icons">
        <a href="/" className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="1x" />
        </a>
        <a href="_" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="1x" />
        </a>
        <a href="_" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="1x" />
        </a>
        <a href="_" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="1x" />
        </a>
      </div>
      <div id="brand">
        <a id="justice" href="/">
          <span>|</span>
          Justice Web Design&nbsp;&nbsp;&copy;2021
          <span>|</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
