import React from "react";
import AddToBasket from "./AddToBasket";

export default function Product({
  img,
  price,
  name,
  distance,
  id,
  description,
  gardenName,
  unit,
}) {
  return (
    <div className="product" socra="product-item">
      <div className="img">
        <img src={img} alt={name} />
      </div>
      <div className="price">
        <span className="amount">{price?.toString()?.replace(".", ",")}€</span>/
        {unit ?? "kg"}
      </div>
      <h6>{name}</h6>
      <p>
        <p>{description && description !== "" ? description : gardenName}</p>
        <p>• {distance} km</p>
      </p>
      <AddToBasket
        item={{ name, price, id, img, quantity: 1, unit, description }}
      />
    </div>
  );
}
