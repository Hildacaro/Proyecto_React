import React from 'react';
import './Empresa.css'

//Equipo Auri//

function Empresa(props) {
return (
  
  <div className="card-empresa">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={require(`../images/empresa-${props.imagen}.jpg`)} className="img-fluid rounded-start"
      alt="Entrada a la galeria con un arbol en medio"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.nombre}</p>
        <p className="card-text">{props.descripccion}<small className="text-muted"></small></p>
        <button type="button" className="boton-empresa">Saber mas</button>
      </div>
    </div>
  </div>
</div> 
)
}

export default Empresa;
