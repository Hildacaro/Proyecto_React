import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./logo-navbar.png";
import "./Navbar.css";

//Navbar Ale
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="galeria"
              href="galeria"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Galería
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              href="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Empresa
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="testimonials"
              href="testimonials"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Equipo
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="demo"
              href="demo"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="mapa"
              href="mapa"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={closeMenu}
            >
              Mapa
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
import React from 'react';
import './Navbar.css';

//Navbar Ale
function Navbar() {
  return (
    <>
    <div>Navbar</div>
    </>
  )
}

export default Navbar
