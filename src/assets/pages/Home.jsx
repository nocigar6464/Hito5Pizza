import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import { useEffect, useState } from "react";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/pizzas");
      const pizzasAnswer = await res.json();
      setPizzas(pizzasAnswer);
      console.log("Pizzas data:", pizzasAnswer); // Verificar contenido de pizzas
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <section>
      <Header />
      <div
        style={{
          marginTop: "2em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <CardPizza productos={pizzas} />
      </div>
    </section>
  );
}

export default Home;
