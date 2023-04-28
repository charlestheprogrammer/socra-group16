import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../reducers/store";
import "../styles/Deal.scss";

export default function Deal({ id, name, price, promotionPrice, image, unit }) {
  const mapOfItems = useSelector((state) => state.basket.mapOfExistingItems);
  const dispatch = useDispatch();
  const title =
    id % 2 ? (
      <h4>
        Aujourd'hui,
        <br />
        c'est <span>{name.toLowerCase()}</span>!
      </h4>
    ) : (
      <h4>
        Vive les
        <br />
        <span>{name.toLowerCase()}</span>!
      </h4>
    );
  return (
    <div className="card">
      <div className="card-price">
        {(promotionPrice - price).toFixed(2).replace(".", ",")}€
      </div>
      <div className="card-header">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        {title}
        <div className="card-footer">
          <span>
            {" "}
            <s>{price.toString().replace(".", ",")}€</s>
            <span className="discount">
              {promotionPrice.toString().replace(".", ",")}€
            </span>
            /{unit}
          </span>
        </div>
        <div className="card-actions">
          <button
            onClick={() =>
              dispatch(
                addItem({
                  name,
                  price: promotionPrice,
                  quantity: 1,
                  id,
                  img: image,
                })
              )
            }
            socra="add-to-basket"
            className={mapOfItems[id] && "disabled"}
          >
            {mapOfItems[id] ? "Déjà" : "Ajouter"} au panier{" "}
            <img src="/images/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
