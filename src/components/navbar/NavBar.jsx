import React from "react";
import "./navBar.css"

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navContainer">
        <span className="logo">Among YYC</span>
        <div className="navItems">
            <button className="navButton">SignIn</button>
            <button className="navButton">Register</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
