import React from "react";
import "./Main.css";

//Main Ale
function Main() {
  return (
    <>
      <div className="text-center bg-image">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">
                Recursos para ayudarte a promover <br /> y vender tu <span id="text-main"> Arte</span>
              </h1>
              <a id="button-main" className="btn btn-light btn-lg" role="button">
                Saber más
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
