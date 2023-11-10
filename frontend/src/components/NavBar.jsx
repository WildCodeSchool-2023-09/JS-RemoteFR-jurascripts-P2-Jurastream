import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/login">Login</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default NavBar;
