import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../reducers/store";

function AddToBasket({ item }) {
  const mapOfItems = useSelector((state) => state.basket.mapOfExistingItems);
  const dispatch = useDispatch();

  const alreadyAdded = mapOfItems[item.id];

  return (
    <button
      disabled={alreadyAdded}
      onClick={() => {
        dispatch(
          addItem({
            ...item,
          })
        );
      }}
      socra="add-to-basket"
    >
      {alreadyAdded ? "Déjà" : "Ajouter"} au panier
      <img src="/images/arrow_white.svg" alt="" />
    </button>
  );
}

export default AddToBasket;
