import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Galeria from "./components/Galeria/Galeria";
import Equipo from "./components/Equipo/Equipo";
import Maps from "./components/Maps/Maps";
import FormValidation from './components/Form/FormValidations';
import Footer from "./components/Footer/Footer";
import Cookies from "./components/Cookies/Cookies";
import EmpresaProps from "./components/Empresa/empresa-props";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <EmpresaProps/>
      <Galeria />
      <Equipo />
      <FormValidation />
      <Maps />
      <Footer />
      <Cookies />
    </div>
  );
}

export default App;