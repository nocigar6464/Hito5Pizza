import Button from "react-bootstrap/Button";
import { Card, Row, Col } from "react-bootstrap";

function CardPizza({ productos = [] }) {
  // Aseguramos que productos sea un array, por defecto vacío
  return (
    <Row>
      {productos.length > 0 ? (
        productos.map((producto, index) => (
          <Col key={index} md={4} sm={12}>
            <Card style={{ width: "18rem", marginBottom: "1rem" }}>
              <Card.Img variant="top" src={producto.img} />
              <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>{producto.ingredients}</Card.Text>
                <Card.Text>${producto.price}</Card.Text>
                <div>
                  <Button style={{ marginRight: "5em" }} variant="primary">
                    Ver más
                  </Button>
                  <Button variant="dark">Añadir</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </Row>
  );
}

export default CardPizza;
