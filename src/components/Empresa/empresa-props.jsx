import React from "react";
import Empresa from "./Empresa";
import "./Empresa.css";

function EmpresaProps() {
  return (
    <div id="empresa">
      <Empresa
        titulo="Nuestra Empresa"
        nombre="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        imagen="arbol"
        descripccion="Last updated 3 mins ago"
      />
      <Empresa
        titulo="Nuestra Misión"
        nombre="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        imagen="caracol"
        descripccion="Last updated 3 mins ago"
      />
      <Empresa
        titulo="Nuestros Valores"
        nombre="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        imagen="galeria"
        descripccion="Last updated 3 mins ago"
      />
    </div>
  );
}

export default EmpresaProps;
