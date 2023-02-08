import React from 'react';
import './Empresa.css'

//Equipo Auri//

function Empresa(props) {
return (
  
  <div class="card">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={require(`../Empresa/empresa-${props.imagen}.jpg`)} className="img-fluid rounded-start"
      alt="Entrada a la galeria con un arbol en medio"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.titulo}</h5>
        <p class="card-text">{props.nombre}</p>
        <p class="card-text">{props.descripccion}<small class="text-muted"></small></p>
        <button type="button" class="boton">Saber mas</button>
      </div>
    </div>
  </div>
</div> 
)
}

export default Empresa












import React from 'react';
import './Empresa.css';

//Empresa Auri
function Empresa() {
  return (
    <>
    <div>Empresa</div>
    </>
  )
}

export default Empresa
