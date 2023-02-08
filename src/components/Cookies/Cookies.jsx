import React, { useState } from 'react';
import './Cookies.css';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import Cooki from './cookie.png';

//Cookies Belen
function Cookies() {
  const [fullscreenXlModal, setFullscreenXlModal] = useState(false);

  const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);
  return (
    <>
    <div>Cookies</div>
    <MDBBtn onClick={toggleShow} className='btn-cookie'>COOKIES</MDBBtn>
      <MDBModal tabIndex='-1' show={fullscreenXlModal} setShow={setFullscreenXlModal}>
        <MDBModalDialog size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>COOKIES</MDBModalTitle>
              
              <MDBBtn
                type='button'
                className='btn-close'
                color='none'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <img src={Cooki} alt="logo" className="cookieImg" /><p>Las cookies de Ogilvy son caseras
              y cocinadas de forma artesanal para darte una dulce bienvenida
              cada vez que nos visitas

Si sigues navegando aceptas el uso de cookies.</p>

<p>El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro.</p>

</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn type='button'  className='btnReact' onClick={toggleShow}>
                ACEPTAR
              </MDBBtn>
              <MDBBtn type='button'  className='btnReact' onClick={toggleShow}>
                RECHAZAR
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}

export default Cookies
