import React from "react";
import { Link } from "react-scroll";
import "./Main.css";

//Main Ale
function Main() {
  return (
    <>
      <div id="main" className="text-center bg-image">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">
                Tenemos todos los recursos para ayudarte <br /> a promover y vender tu <span id="text-main"> Arte</span>
              </h1>
              <a id="button-main" className="btn btn-light btn-lg" role="button">
              <Link id="text-main-btn"
              to="empresa"
              href="empresa"
              spy={true}
              smooth={true}
              offset={-50}
              duration={400}
            >
              Saber más
            </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
