import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // Nuevo estado para controlar el mensaje de éxito

  const validarInput = (e) => {
    e.preventDefault();

    // Limpiar el mensaje de éxito al hacer una nueva validación
    setSuccess(false);

    // Validación de campos vacíos
    if (!email || !pass) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // Validación de longitud de la contraseña
    if (pass.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Si todas las validaciones pasan, limpiamos el error y mostramos éxito
    setError("");
    setSuccess(true); // Establecemos el estado de éxito en verdadero
    console.log("Formulario enviado correctamente");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column", // Para alinear el mensaje debajo del formulario
      }}>
      <Form style={{ width: "30em" }} onSubmit={validarInput}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            No compartiremos tu correo.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPass(e.target.value)}
          />
          <Form.Text className="text-muted">
            Tu contraseña debe tener al menos 6 caracteres.
          </Form.Text>
        </Form.Group>

        {/* Mostrar mensaje de error si hay uno */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <Button variant="dark" type="submit">
          Enviar
        </Button>
      </Form>

      {/* Mostrar mensaje de éxito si el formulario fue validado correctamente */}
      {success && (
        <p style={{ color: "green", marginTop: "20px" }}>
          Login realizado con éxito
        </p>
      )}
    </div>
  );
}

export default Login;
