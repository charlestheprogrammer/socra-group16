import React from "react";
import "../styles/Header.scss";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [productActive, setProductActive] = React.useState(false);
  const [commandActive, setCommandActive] = React.useState(false);
  const [cartActive, setCartActive] = React.useState(false);
  const location = useLocation();
  React.useEffect(() => {
    setProductActive(
      location.pathname === "/" || location.pathname.startsWith("/product")
    );
    setCommandActive(location.pathname.startsWith("/commands"));
    setCartActive(location.pathname.startsWith("/basket"));
  }, [location.pathname]);
  const basketItems = useSelector((state) => state.basket.nbOfItems);
  return (
    <header socra="main-navigation">
      <div>
        <Link to={"/"}>
          <img src="/images/socarotte.png" alt="" className="large" />
          <img src="/favicon.ico" alt="" className="small" />
        </Link>
        <nav>
          <Link to={"/product"}>
            <div className={(productActive && "active") || ""}>Produits</div>
          </Link>
          <Link to={"/commands"}>
            <div className={(commandActive && "active") || ""}>Commandes</div>
          </Link>
        </nav>
      </div>
      <p>Des produits frais de votre voisinage</p>
      <nav>
        <Link to={"/product"}>
          <div className={(productActive && "active") || ""}>Produits</div>
        </Link>
        <Link to={"/commands"}>
          <div className={(commandActive && "active") || ""}>Commandes</div>
        </Link>
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
