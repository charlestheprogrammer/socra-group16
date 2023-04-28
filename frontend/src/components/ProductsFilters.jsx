import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductsFilters() {
  const navigate = useNavigate();
  const { productName } = useParams();
  return (
    <div className="filters">
      <h5>Trier</h5>
      <div className="sort">
        <div>
          <input type="radio" name="sort" id="sort1" />
          <label htmlFor="sort1">Prix croissant</label>
        </div>
        <div>
          <input type="radio" name="sort" id="sort2" />
          <label htmlFor="sort2">Promotions d'abord</label>
        </div>
        <div>
          <input type="radio" name="sort" id="sort3" />
          <label htmlFor="sort3">Proximité avec moi </label>
        </div>
        <div>
          <input type="radio" name="sort" id="sort4" />
          <label htmlFor="sort4">Prix décroissant</label>
        </div>
      </div>
      <h5 className="always">Catégorie</h5>
      <div className="category always" socra="product-navigation">
        <div>
          <input
            type="radio"
            name="category"
            id="all"
            onClick={() => navigate("/product")}
            checked={productName == null}
          />
          <label htmlFor="all">Toutes</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="vegetable"
            onClick={() => navigate("/product/vegetable")}
            checked={productName === "vegetable"}
          />
          <label htmlFor="vegetable">Fruits & Légumes</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="category2"
            onClick={() => navigate("/product/chicken")}
            checked={productName === "chicken"}
          />
          <label htmlFor="category2">Volailles</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="category3"
            onClick={() => navigate("/product/red-meat")}
            checked={productName === "red-meat"}
          />
          <label htmlFor="category3">Viande rouge</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="category4"
            onClick={() => navigate("/product/drink")}
            checked={productName === "drink"}
          />
          <label htmlFor="category4">Boissons</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="category5"
            onClick={() => navigate("/product/wine")}
            checked={productName === "wine"}
          />
          <label htmlFor="category5">Vin & Spiritieux</label>
        </div>
      </div>
    </div>
  );
}
