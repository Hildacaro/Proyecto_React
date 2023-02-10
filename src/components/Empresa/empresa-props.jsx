import React from "react";
import Empresa from "./Empresa";
import "./Empresa.css";

function EmpresaProps() {
  return (
    <div id="empresa">
      <Empresa
        titulo="Nuestra Empresa"
        nombre="En la Galería OGILVY. Madrid. Llevamos casí tres décadas ofreciendo exposiciones de pintura contemporánea de los artistas más relevantes del panorama nacional. La galería fue fundada en el año 1985 y desde entonces se celebran exposiciones mensuales tanto de jóvenes talentos como de pintores consagrados.

        "
        imagen="arbol"
        descripccion="Historia"
      />
      <Empresa
        titulo="Nuestra Misión"
        nombre="Conservar la colección para que las futuras generaciones la disfruten. Examinarla regularmente y realizar las labores necesarias de restauración; garantizar el transporte seguro de las obras en caso de préstamo a otras instituciones."
        imagen="caracol"
        descripccion="Objetivos"
      />
      <Empresa
        titulo="Nuestros Valores"
        nombre="Olgivy se compromete a buscar la excelencia en todas sus actividades, desde la conservación de las obras hasta su presentación al público; desde la labor educativa hasta la atención al visitante; desde la investigación desarrollada hasta la organización de exposiciones y la publicación de catálogos que sean referentes en el entorno académico. El compromiso con la calidad y el respeto del patrimonio es fundamental para generar confianza entre los visitantes y poder servir cada día a un mayor número de personas"
        imagen="galeria"
        descripccion="Más Valores"
      />
    </div>
  );
}

export default EmpresaProps;
