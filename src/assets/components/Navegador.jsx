import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navegador() {
  //creo las variables token en booleana y muestra si esta logeado el usuario o no
  const total = 25000;
  const token = false;
  //para probar la visualizacion del login hay que cambiar este valor del token

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Pizzeria Mamma Mia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">🍕 Home</Nav.Link>
            //muestra el boton de profile y logout si el token es true
            {token ? (
              <>
                <Nav.Link href="#profile">👤 Profile</Nav.Link>
                <Nav.Link href="#logout">🔒 Logout</Nav.Link>
              </>
            ) : (
              //muestra el boton de login y register si el token es false
              <>
                <Nav.Link href="#login">🔐 Login</Nav.Link>
                <Nav.Link href="#register">🔐 Register</Nav.Link>
              </>
            )}
            <Nav.Link href="#total">
              🛒 Total $
              {total.toLocaleString("es-ES", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              })}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navegador;
