import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Basket.scss";
import { removeItem } from "../reducers/store";

export default function Basket() {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  return (
    <main>
      <section className="basket">
        <h1>Votre panier</h1>
        <div className="basket_items" socra="basket">
          {basket.items.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Produit</th>
                  <th>Quantité</th>
                  <th>Prix</th>
                </tr>
              </thead>
              <tbody>
                {basket.items.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <div className="img">
                        {item.img && <img src={item.img} alt={item.name} />}
                      </div>
                      <h2>
                        {item.name}
                        <p>{item.description}</p>
                      </h2>
                    </td>
                    <td>
                      <p>
                        {item.quantity} {item.unit}
                      </p>
                      <button
                        socra="remove-item"
                        onClick={() => {
                          dispatch(removeItem({ id: item.id }));
                        }}
                      >
                        <i className="fa-solid fa-trash-can"></i> Supprimer
                      </button>
                    </td>
                    <td>
                      <p>{item.price.toString().replace(".", ",")}€</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Votre panier est vide</p>
          )}
        </div>
      </section>
    </main>
  );
}
