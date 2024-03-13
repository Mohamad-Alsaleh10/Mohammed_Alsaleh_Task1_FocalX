import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import "./NavbarStyle.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <h1>Villa</h1>
              </a>
              <ul className={`nav ${isMenuOpen ? "open" : ""}`}>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/properties">Properties</NavLink>
                </li>
                <li>
                  <NavLink to="/property_detail">Property Details</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
                <li>
                  <a href="#">
                    <i className="celender">
                      <FaCalendar />
                    </i>
                    Schedule a visit
                  </a>
                </li>
              </ul>
              <a className="menu-trigger" onClick={toggleMenu}>
                <span className={` ${isMenuOpen ? "open" : ""}`}>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
