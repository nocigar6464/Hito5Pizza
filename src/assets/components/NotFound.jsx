import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <Spinner animation="grow" variant="danger" />
      <p>
        Página web no encontrada, por favor redirígete a nuestro{" "}
        <Link to="/">HOME</Link>
      </p>
    </section>
  );
}

export default NotFound;
