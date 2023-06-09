import React from "react";
import "./Footer.css";
import Logo from "../images/logonavbar.png";
import { MDBFooter } from "mdb-react-ui-kit";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { MDBIcon } from "mdb-react-ui-kit";

//Footer Belen
function Footer() {
  return (
    <>
        <MDBFooter className="text-white text-center footerBelen">
          <MDBContainer className="p-4">
            <MDBRow>
              <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
                <img src={Logo} alt="logo" className="logoFooter" />
                <div>
                  <MDBIcon fab icon="amazon" size="2x" />
                  <MDBIcon fab icon="twitter" size="2x" />
                  <MDBIcon fab icon="instagram" size="2x" />
                  <MDBIcon fab icon="facebook" size="2x" />
                  </div>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#empresa" className="text-white">
                      Empresa
                    </a>
                  </li>
                  <li>
                    <a href="#equipo" className="text-white">
                      Nosotras
                    </a>
                  </li>
                  <li>
                    <a href="#galeria" className="text-white">
                      Expo
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Obras
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                

                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-white">
                      Aviso legal
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Política de privacidad
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Contacto
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Atención al cliente
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 OgliviArt
            <a className="text-white" href="https://mdbootstrap.com/"></a>
          </div>
        </MDBFooter>
    </>
  );
}

export default Footer;
