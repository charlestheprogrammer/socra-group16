import React from "react";
import { useSelector } from "react-redux";

export default function Basket() {
  const basket = useSelector((state) => state);
  return (
    <main>
      <section>
        <h1>Votre panier</h1>
        {basket?.items.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}€</p>
          </div>
        ))}
      </section>
    </main>
  );
}