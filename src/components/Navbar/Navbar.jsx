import React from "react";
import "./Navbar.css";

//Navbar Ale
function Navbar() {
  return (
    <>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      >
        <div className="container-fluid">
          <a id="logo" className="navbar-brand"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-md-auto gap-2">
              <li className="nav-item rounded">
                <a className="nav-link active" aria-current="page">
                  Inicio
                </a>
              </li>
              <li className="nav-item rounded">
                <a className="nav-link">Nuestras series</a>
              </li>
              <li className="nav-item rounded">
                <a className="nav-link">Sobre nosotros</a>
              </li>
              <li className="nav-item rounded">
                <a className="nav-link">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
