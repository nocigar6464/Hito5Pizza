import Carousel from "react-bootstrap/Carousel";
import header1_pizza from "../img/header1_pizza.png";
import header2_pizza from "../img/header2_pizza.png";
import header3_pizza from "../img/header3_pizza.jpeg";

function Header() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={header1_pizza} // Usar la imagen importada aquí
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Pizzeria Mamma Mia</h3>
          <p>Tenemos las mejores pizzas que podrás encontrar!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={header2_pizza} // Si tienes más imágenes, cámbialas aquí
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Llamanos y pide una rica pizza</h3>
          <p>Abierto 24/7</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={header3_pizza} // Usar la imagen adecuada para el tercer slide
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Puedes elegir tu propia combinacion</h3>
          <p>Tomate, jamón, elige lo que quieras.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;
