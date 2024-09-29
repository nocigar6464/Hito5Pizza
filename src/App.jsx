//enrutador
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//componentes
import Navegador from "./assets/components/Navegador";
import Register from "./assets/components/Register";
import Home from "./assets/components/Home";
import Login from "./assets/components/Login";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <Router>
      <Navegador />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
