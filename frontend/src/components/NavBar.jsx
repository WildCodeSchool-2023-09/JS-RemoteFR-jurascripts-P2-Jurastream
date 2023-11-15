import { Link } from "react-router-dom";
import "./NavBar.scss";
import React, { useState } from "react";
import Logo from "../assets/LOGO.png";

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  // const handleShowLinks = () => {
  //   setShowLinks(!showLinks);
  // };

  const toggleMenuBuger = () => {
    setShowLinks(!showLinks);
  };

  // Gestion du clavier pour l'accessibilité
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      toggleMenuBuger();
    }
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <Link to="/home">
        <img src={Logo} alt="logo" />
      </Link>
      <div>
        <ul className="navbar_links">
          <li className="navbar_item slideInDown-1">
            <Link className="navbar_link" to="/home">
              Home
            </Link>
          </li>
          <li className="navbar_item slideInDown-2">
            <Link className="navbar_link" to="/movies">
              Movies
            </Link>
          </li>
          <li className="navbar_item slideInDown-3">
            <Link className="navbar_link" to="/series">
              Series
            </Link>
          </li>
          <li className="navbar_item slideInDown-4">
            <Link className="navbar_link" to="/favorites">
              Favorites
            </Link>
          </li>
        </ul>
        <div
          onClick={toggleMenuBuger}
          onKeyDown={handleKeyPress}
          tabIndex={0}
          role="button"
        >
          <span className="burger-bar" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
