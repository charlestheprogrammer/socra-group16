import React from "react";
import { Link } from "react-router-dom";

export default function CategoriesBanner() {
  return (
    <div className="categoriesSelector" socra="banner">
      <Link to={"/product/vegetable#view"}>
        <div className="category">
          <div className="img">
            <img src="/images/fruits_vegetables.png" alt="" />
          </div>
          <p>
            Fruits & <br />
            Légumes
          </p>
        </div>
      </Link>
      <Link to={"/product/drink#view"}>
        <div className="category">
          <div className="img">
            <img src="/images/drinks.png" alt="" />
          </div>
          <p>Boissons</p>
        </div>
      </Link>
      <Link to={"/product/red-meat#view"}>
        <div className="category">
          <div className="img">
            <img src="/images/red_meat.png" alt="" />
          </div>
          <p>
            Viande
            <br />
            rouge
          </p>
        </div>
      </Link>
      <Link to={"/product/chicken#view"}>
        <div className="category">
          <div className="img">
            <img src="/images/chicken.png" alt="" />
          </div>
          <p>Volailles</p>
        </div>
      </Link>
      <Link to={"/product/wine#view"}>
        <div className="category">
          <div className="img">
            <img src="/images/wine.png" alt="" />
          </div>
          <p>
            Vins &<br />
            spiritueux
          </p>
        </div>
      </Link>
    </div>
  );
}
