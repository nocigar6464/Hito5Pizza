//enrutador
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//COMPONENTS
import Navegador from "./assets/components/Navegador";
import Footer from "./assets/components/Footer";
import Profile from "./assets/components/Profile";
import NotFound from "./assets/components/NotFound";

// PAGES
import Unica from "./assets/pages/Unica";
import Login from "./assets/pages/Login";
import Home from "./assets/pages/Home";
import Cart from "./assets/pages/Cart";
import Register from "./assets/pages/Register";

function App() {
  return (
    <Router>
      <Navegador />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Unica />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
