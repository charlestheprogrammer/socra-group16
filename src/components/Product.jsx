import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../reducers/store";
import AddToBasket from "./AddToBasket";

export default function Product({
  img,
  price,
  name,
  distance,
  id,
  description,
  unit,
}) {
  const mapOfItems = useSelector((state) => state.basket.mapOfExistingItems);
  const dispatch = useDispatch();
  return (
    <div className="product" socra="product-card">
      <div className="img">
        <img src={img} alt={name} />
      </div>
      <div className="price">
        <span className="amount">{price?.toString()?.replace(".", ",")}€</span>/
        {unit}
      </div>
      <h6>{name}</h6>
      <p>
        {description} • {distance}
      </p>
      <AddToBasket
        item={{ name, price, id, img, quantity: 1, unit, description }}
      />
    </div>
  );
}
