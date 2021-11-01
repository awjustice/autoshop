import React from "react";
import "../css/Home.css";
import honda from "../assets/images/hondaLogo.jpg";
import nissan from "../assets/images/nissanLogo.jpg";
import lexus from "../assets/images/lexusLogo.jpg";
import mazda from "../assets/images/mazdaLogo.jpg";
import acura from "../assets/images/acuraLogo.jpg";
import toyota from "../assets/images/toyotaLogo.jpg";
import Map from "./Map";
import Reviews from "./Reviews.js";

const Home = () => {
  return (
    <div className="home">
      <h1>T&amp;T Auto Repair</h1>
      <br />

      <a id="phone" href="tel:+16192840050">
        (619)284-0050
      </a>
      {""}
      <br />
      <p id="address">
        4030 43rd Street &nbsp; San Diego, CA &nbsp;&nbsp;&nbsp;[City Heights]
      </p>

      <div className="imageMapImage">
        <img id="nissan" src={nissan} alt="nissanLogo" />
        <img src={honda} alt="hondaLogo" />
        <img id="lexus" src={lexus} alt="lexusLogo" />
        <Map />
        <img id="mazda" src={mazda} alt="mazdaLogo" />
        <img src={toyota} alt="toyotaLogo" />
        <img id="acura" src={acura} alt="acuraLogo" />
      </div>
      <p id="slogan">SPECIALIZING IN JAPANESE CARS</p>

      <div id="bottom">
        <Reviews />

        <div id="hoursBox">
          <h5>
            <em>HOURS</em>
          </h5>
          <div id="hours">
            <p>Weekdays...8:00 to 5:00</p>
            <p id="saturday">Saturday...9:00 to 3:00</p>
            <p id="sunday">Closed Sunday</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
