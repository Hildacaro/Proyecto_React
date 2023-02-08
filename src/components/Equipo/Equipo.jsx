import React from "react";
import Card from "./Card";


import mey from "./images/mey.jpg";
import auri from './images/auri.jpg'
import ale from "./images/ale.jpg"
import belen from './images/belen.jpg'
import hilda from './images/hilda.jpg'
import mica  from './images/mica.jpg'

const cards = [
  {
    id: 1,
    title: "María López",
    text:"Product Owner",
    image: mey,
  
  },
  
  {
    id: 2,
    title: "Aurea Gutierrez",
    text:"Scrum Master",
    image: auri,
    
  },
  {
    id: 3,
    title: "Alejandra Pedroza",
    text:"Development",
    image: ale,
  
  },
  {
    id: 4,
    title: "Belen Zumi",
    text:"Development",
    image: belen,
  
  },
  {
    id: 5,
    title: "Hilda Da Conceicao",
    text:"Development",
    image: hilda,
  },
  {
    id: 6,
    title: "Micaela Huertas",
    text:"Development",
    image: mica,
  
  },
];

function Equipo() {
  return (
    <div id="equipo" className="container d-flex justify-content-center align-items-center">
      <div className="row">
        {cards.map(({ title, text, image, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Equipo;
import React from 'react';
import './Equipo.css';

//Equipo Mica
function Equipo() {
  return (
    <>
    <div>Equipo</div>
    </>
  )
}

export default Equipo
