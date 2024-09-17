//importo el estilo de css de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//importo los componentes
import Navegador from "./assets/components/Navegador";
import Home from "./assets/components/Home";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <section>
      <Navegador />
      <Home />
      <Footer />
    </section>
  );
}

export default App;
