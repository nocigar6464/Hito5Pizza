//para usar en enrutador
import { Link } from "react-router-dom";

//componentes de react
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navegador() {
  const total = 25000;
  const token = false;

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Pizzeria Mamma Mia
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              🍕 Home
            </Nav.Link>
            {token ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  👤 Profile
                </Nav.Link>
                <Nav.Link as={Link} to="/logout">
                  🔒 Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  🔐 Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  🔐 Register
                </Nav.Link>
              </>
            )}
            <Nav.Link>
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
