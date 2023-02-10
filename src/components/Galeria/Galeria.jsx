import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Galeria.css";
import imagen1 from "../images/dan-farrell1.jpg";
import imagen2 from "../images/PaulMalinski.jpg";
import imagen3 from "../images/RobertoFerri3.jpg";

//Galeria Mey
function Galeria() {
  return (
    <Carousel id="galeria">
      <Carousel.Item>
        <img className="d-block w-100" src={imagen1} alt="Dan Farrell" />
        <Carousel.Caption>
          <h3 className="carousel-caption d-none d-md-block">
            <a id="carrousel-link"
              href="https://www.askart.com/artist/Dan_Farrell/11261928/Dan_Farrell.aspx"
              className="link4"
            >
              Dan Farrell
            </a>
          </h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imagen2} alt="Paul malinski" />

        <Carousel.Caption>
          <h3 className="carousel-caption d-none d-md-block">
            <a id="carrousel-link" href="https://www.bosshunting.com.au/lifestyle/design/paul-milinski-vaulter/" class="link4">
              Paul Malinski
            </a>
          </h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imagen3} alt="Roberto Ferri" />

        <Carousel.Caption>
          <h3 className="carousel-caption d-none d-md-block">
            <a id="carrousel-link" href="https://www.robertoferri.net/" class="link4">
              Roberto Ferri
            </a>
          </h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Galeria;
