import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../reducers/store";

export default function Deal({ id, name, price, promotionPrice, image, unit }) {
  const mapOfItems = useSelector((state) => state.mapOfExistingItems);
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
      <div className="card-header">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        {title}
        <div className="card-footer">
          <span>
            {" "}
            <s>{price}€</s>
            <span className="discount">{promotionPrice}€</span>/{unit}
          </span>
        </div>
        <div className="card-actions">
          <button
            onClick={() =>
              dispatch(
                addItem({
                  name,
                  price,
                  quantity: 1,
                  id,
                })
              )
            }
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
