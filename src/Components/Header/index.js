// Header.js
import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useContext(CartContext); // Access cart context

  const handleSubMenu = (section) => {
    setActiveSubMenu(activeSubMenu === section ? null : section);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeSubMenu = () => {
    setActiveSubMenu(null);
  };

  return (
    <div className="header-container">
      {/* Header Left */}
      <div className="header-left">
        <Link to="/"><img src="/Assests/logo.avif" alt="Logo" className="logo" /></Link>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <div className="menu-items">
          <div
            className="menu-item"
            onMouseEnter={() => handleSubMenu("Types of Books")}
            onMouseLeave={closeSubMenu}
            onClick={() => handleSubMenu("Types of Books")}
          >
            <span>Types of Books</span>
            {activeSubMenu === "Types of Books" && (
              <div className="submenu">
                <ul>
                  <li>Class 1 to 10</li>
                  <li>Class X to XII</li>
                  <li>NCERT</li>
                  <li>Newspaper</li>
                  <li>Weekend Magazine</li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="menu-item"
            onMouseEnter={() => handleSubMenu("Comics")}
            onMouseLeave={closeSubMenu}
            onClick={() => handleSubMenu("Comics")}
          >
            <span>Comics</span>
            {activeSubMenu === "Comics" && (
              <div className="submenu">
                <ul>
                  <li>Kids Comics</li>
                  <li>Korean Series</li>
                  <li>Telugu Comics</li>
                  <li>Hindi Comics</li>
                  <li>English Comics</li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="menu-item"
            onMouseEnter={() => handleSubMenu("Language")}
            onMouseLeave={closeSubMenu}
            onClick={() => handleSubMenu("Language")}
          >
            <span>Language</span>
            {activeSubMenu === "Language" && (
              <div className="submenu">
                <ul>
                  <li>English</li>
                  <li>Hindi</li>
                  <li>Tamil</li>
                  <li>Telugu</li>
                  <li>Others</li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="menu-item"
            onMouseEnter={() => handleSubMenu("Prices in Order")}
            onMouseLeave={closeSubMenu}
            onClick={() => handleSubMenu("Prices in Order")}
          >
            <span>Prices in Order</span>
            {activeSubMenu === "Prices in Order" && (
              <div className="submenu">
                <ul>
                  <li>1-100</li>
                  <li>101-1000</li>
                  <li>1001-10000</li>
                  <li>More</li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="menu-item"
            onMouseEnter={() => handleSubMenu("Combo Set")}
            onMouseLeave={closeSubMenu}
            onClick={() => handleSubMenu("Combo Set")}
          >
            <span>Combo Set</span>
            {activeSubMenu === "Combo Set" && (
              <div className="submenu">
                <ul>
                  <li>6th to 10th NCERT</li>
                  <li>RRB Combo Set</li>
                  <li>SSC Combo Set</li>
                  <li>IIT & JEE Mains Combo</li>
                  <li>11th & 12th State & Central</li>
                  <li>All Others</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sliding Menu */}
      {isMenuOpen && (
        <div className="sliding-menu">
          <div className="close-icon" onClick={toggleMenu}>
            X
          </div>
          <ul className="menu-list">
            <li>Notifications</li>
            <li>Offers</li>
            <li>Account Settings</li>
            <li>Profiles</li>
            <li>Help Center</li>
            <li>Contact Us</li>
          </ul>
        </div>
      )}

      {/* Header Right */}
      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <div className="search-icon">🔍</div>
        </div>
        <div className="icon-group">
          <Link to="/cart"><div className="icon">🛒</div></Link>
          
          <div className="icon">⋯</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
