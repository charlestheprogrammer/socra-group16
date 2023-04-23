import React from "react";
import "../styles/Header.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [productActive, setProductActive] = React.useState(false);
  const [commandActive, setCommandActive] = React.useState(false);
  const [cartActive, setCartActive] = React.useState(false);
  const basketItems = useSelector((state) => state.basket.nbOfItems);
  return (
    <header socra="main-navigation">
      <div>
        <NavLink to={"/"}>
          <img src="/images/socarotte.png" alt="" className="large" />
          <img src="/favicon.ico" alt="" className="small" />
        </NavLink>
        <nav>
          <NavLink to={"/product"} className={({ isActive }) => (isActive ? "active" : "")}>
            <div>Produits</div>
          </NavLink>
          <NavLink to={"/commands"} className={({ isActive }) => (isActive ? "active" : "")}>
            <div>Commandes</div>
          </NavLink>
        </nav>
      </div>
      <p>Des produits frais de votre voisinage</p>
      <nav>
        <NavLink to={"/product"} className={({ isActive }) => (isActive ? "active" : "")}>
          <div>Produits</div>
        </NavLink>
        <NavLink to={"/commands"} className={({ isActive }) => (isActive ? "active" : "")}>
          <div>Commandes</div>
        </NavLink>
      </nav>
      <div>
        <NavLink to={"/basket"} socra="basket-nav-link">
          <div>
            <i className="fa fa-shopping-cart fa-lg"></i>
          </div>
          <p>
            {basketItems} <span>produit{basketItems > 1 && "s"}</span>
          </p>
        </NavLink>
      </div>
    </header>
  );
}
