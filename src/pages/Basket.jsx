import React from "react";
import { useSelector } from "react-redux";
import "../styles/Basket.scss";

export default function Basket() {
  const basket = useSelector((state) => state.basket);
  return (
    <main>
      <section className="basket">
        <h1>Votre panier</h1>
        <div className="basket_items">
          {basket?.items.map((product) => (
            <div key={product.id}>
              <div className="img">
                <img src={product.img} alt={product.name} />
              </div>
              <h2>{product.name}</h2>
              <p>{product.price?.toString().replace(".", ",")}€</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
