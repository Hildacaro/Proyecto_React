import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Galeria.css';
import imagen1 from './img/dan-farrell1.jpg';
import imagen2 from './img/PaulMalinski.jpg';
import imagen3 from './img/RobertoFerri3.jpg';


//Galeria Mey
function Galeria() {
  return (
    <Carousel id='galeria'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="Dan Farrell"
        />
        <Carousel.Caption>
        <h3 class="carousel-caption d-none d-md-block">
  <a href="https://www.askart.com/artist/Dan_Farrell/11261928/Dan_Farrell.aspx"  class="link4">Dan Farrell</a>
</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen2}
          alt="Paul malinski"
        />

        <Carousel.Caption>
        <h3 class="carousel-caption d-none d-md-block">
  <a href=""  class="link4">Paul Malinski</a>
</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Roberto Ferri"
        />

        <Carousel.Caption>
        <h3 class="carousel-caption d-none d-md-block">
  <a href="https://www.robertoferri.net/"  class="link4">Roberto Ferri</a>
</h3>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

import React from 'react';
import './Galeria.css';

//Galeria Mey
function Galeria() {
  return (
    <>
    <div>Galeria</div>
    </>
  )
}

export default Galeria