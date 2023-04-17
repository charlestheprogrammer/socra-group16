import React from "react";
import "../styles/Header.scss";
import { Link, useMatch } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const productActive = useMatch("/") || useMatch("/product/*");
  const commandActive = useMatch("/commands");
  const cartActive = useMatch("/basket");
  const basketItems = useSelector((state) => state.nbOfItems);
  return (
    <header socra="main-navigation">
      <div>
        <img src="/images/socarotte.png" alt="" className="large" />
        <img src="/favicon.ico" alt="" className="small" />
        <nav>
          <Link to={"/product"}>
            <div className={productActive && "active"}>Produits</div>
          </Link>
          <Link to={"/commands"}>
            <div className={commandActive && "active"}>Commandes</div>
          </Link>
        </nav>
      </div>
      <p>Des produits frais de votre voisinage</p>
      <nav>
        <div className="active">Produits</div>
        <div>Commandes</div>
      </nav>
      <div>
        <Link to={"/basket"}>
          <div>
            <i className="fa fa-shopping-cart fa-lg"></i>
          </div>
          <p>
            {basketItems} <span>produit{basketItems > 1 && "s"}</span>
          </p>
        </Link>
      </div>
    </header>
  );
}
