import "./Header.css";
import CartButton from "./CartButton";
import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <nav className="navbar">
        <h1 className="navbar__brand">ReactMeals</h1>
        <CartButton onClick={props.onShowCart} />
      </nav>
      <div className="hero"></div>
    </div>
  );
};
export default Header;
