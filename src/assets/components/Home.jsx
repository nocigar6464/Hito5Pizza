import CardPizza from "./CardPizza";
import Header from "./Header";

function Home() {
  // Array con los productos
  const productos = [
    {
      name: "Napolitana",
      price: 5950,
      ingredients: ["mozzarella tomates jamón orégano"],
      img: "https://www.readypizzacr.com/_next/image?url=https%3A%2F%2Fcargo-core-api.s3.us-west-2.amazonaws.com%2Fcr%2Fdinamic%2Fproduct%2F04d598a6-13ed-418b-b6f1-ec81ddf40f45%2F0%2F512.png&w=1200&q=75",
    },
    {
      name: "Española",
      price: 6950,
      ingredients: ["mozzarella gorgonzola parmesano"],
      img: "https://www.readypizzacr.com/_next/image?url=https%3A%2F%2Fcargo-core-api.s3.us-west-2.amazonaws.com%2Fcr%2Fdinamic%2Fproduct%2F7d473b0a-eba7-4538-87c0-a1a0fde7a614%2F0%2F512.png&w=1920&q=75",
    },
    {
      name: "Pepperoni",
      price: 6950,
      ingredients: ["mozzarella pepperoni orégano"],
      img: "https://eatcaulipower.com/assets/images/products/_detail/854934007105_product.jpg",
    },
  ];

  return (
    <section>
      <Header />
      <div style={{ marginTop: "2em" }}>
        <CardPizza productos={productos} />
      </div>
    </section>
  );
}

export default Home;
