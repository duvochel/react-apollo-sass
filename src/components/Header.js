import React from "react";
import { Link } from "react-router-dom";

import diorLogo from "../icons/diorLogo.svg";
import cartIcon from "../icons/shopping-cart.svg";

import "../styles/header.scss";

const Header = () => {
  return (
    <div className="app-bar">
      <Link to="/home">
        <div className="logo-header slide-top">
          <img alt="logo-dior" src={diorLogo} />
        </div>
      </Link>
      <Link to="/">
        <div className="cart-icon image-box slide-top">
          <img alt="shopping-cart" src={cartIcon} />
        </div>
      </Link>
    </div>
  );
};

export default Header;
