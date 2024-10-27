import React, { useState, useEffect } from "react";
import CardPizza from "../components/CardPizza";

function Unica() {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/pizzas/p001");
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza data:", error);
      }
    };
    fetchPizza();
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2em" }}>
      {pizza ? <CardPizza productos={[pizza]} /> : <p>Cargando...</p>}
    </div>
  );
}

export default Unica;
