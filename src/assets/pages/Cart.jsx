import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card, Row, Col } from "react-bootstrap";
import { pizzaCart } from "../bbdd/pizzas";

function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id ? { ...item, count: item.count - 1 } : item
          )
          .filter((item) => item.count > 0) // Elimina pizzas con cantidad 0
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <Row>
        {cart.map((item) => (
          <Col key={item.id} md={4} sm={12}>
            <Card style={{ width: "18rem", marginBottom: "1rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <li>{item.ingredients}</li>
                </Card.Text>
                <Card.Text>Precio: ${item.price}</Card.Text>
                <Card.Text>Cantidad: {item.count}</Card.Text>
                <div>
                  <Button
                    variant="primary"
                    onClick={() => increaseQuantity(item.id)}>
                    +
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => decreaseQuantity(item.id)}
                    style={{ marginLeft: "1em" }}>
                    -
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h3>Total: ${calculateTotal()}</h3>
      <Button variant="success">Pagar</Button>
    </div>
  );
}

export default Cart;
