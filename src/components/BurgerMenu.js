import React from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../css/BurgerMenu.css";

const BurgerMenu = () => {
  return (
    <Menu right>
      <Link id="home" to={"/"} className="menu-item">
        Home
      </Link>
      <Link id="About" to={"/About"} className="menu-item">
        About
      </Link>
      <Link id="Services" to={"/Services"} className="menu-item">
        Services
      </Link>
      <Link id="Contact" to={"/Contact"} className="menu-item">
        Contact
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
