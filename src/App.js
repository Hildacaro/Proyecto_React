import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Galeria from "./components/Galeria/Galeria";
import Empresa from "./components/Empresa/Empresa";
import Equipo from "./components/Equipo/Equipo";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Cookies from "./components/Cookies/Cookies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Galeria />
      <Empresa
      titulo="Card title"
      nombre="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."   
      imagen="arbol"
      descripccion="Last updated 3 mins ago"
      />
      <Empresa
       titulo="Card title"
       nombre="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."   
       imagen="caracol"
       descripccion="Last updated 3 mins ago"
       />
       <Empresa
       titulo="Card title"
       nombre="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."   
       imagen="galeria"
       descripccion="Last updated 3 mins ago"
       />

      <Equipo />
      <Form />
      <Footer />
      <Cookies />
    </div>
  );
}

export default App;
