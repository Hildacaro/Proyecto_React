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
            <img src={Cooki} alt="logo" className="cookieImg" /><p>Las cookies de Ogilvy son caseras <br></br>
              y cocinadas de forma artesanal<br></br> para darte una dulce bienvenida<br></br> 
              cada vez que nos visitas<br></br>

Si sigues navegando aceptas <br></br>el uso de cookies.</p>

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