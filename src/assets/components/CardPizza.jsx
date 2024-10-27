import React from "react";
import Button from "react-bootstrap/Button";
import { Card, Row, Col } from "react-bootstrap";

function CardPizza({ productos = [] }) {
  return (
    <Row>
      {productos.length > 0 ? (
        productos.map((producto, index) => (
          <Col key={index} md={4} sm={12}>
            <Card style={{ width: "18rem", marginBottom: "1rem" }}>
              <Card.Img variant="top" src={producto.img} />
              <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>Ingredientes:</Card.Text>
                <ul>
                  {producto.ingredients.map((ingrediente, idx) => (
                    <li key={idx}>{ingrediente}</li>
                  ))}
                </ul>
                <Card.Text>Precio: ${producto.price}</Card.Text>
                <div>
                  <Button variant="primary" style={{ marginRight: "1em" }}>
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
