import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Deal from "../components/Deal";
import ProductCategory from "../components/ProductCategory";
import ProductsFilters from "../components/ProductsFilters";
import BestProducts from "../components/BestProducts";

export default function Products() {
  const { pathname, hash, key } = useLocation();
  React.useEffect(() => {
    if (hash !== "") {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo(0, element.getBoundingClientRect().top - 90);
        }
      }, 0);
    }
  }, [pathname, hash, key]);
  return (
    <main>
      <section>
        <h1>Promotions</h1>
        <div className="deals">
          <Deal
            name="Carotte"
            price={3.37}
            promotionPrice={2.92}
            image="https://cdn.foodaciously.com/static/stories/92b1a695-549f-4844-89e4-d14bbd83635b/carrots2-b8c3b42bd952e8e533cf78f7fb806f0b-1920-q60.jpg"
            unit="kg"
            id={1}
          />
          <Deal
            name="Pomme de terre"
            price={2.34}
            promotionPrice={1.74}
            image="https://post.healthline.com/wp-content/uploads/2020/09/AN440-Potatoes-732x549-thumb-732x549.jpg"
            unit="kg"
            id={2}
          />
          <Deal
            name="Pomme"
            price={1.99}
            promotionPrice={1.49}
            image="https://img.passeportsante.net/1200x675/2021-05-03/i102145-pomme-nu.webp"
            unit="kg"
            id={3}
          />
        </div>
      </section>
      <section>
        <div className="products">
          <ProductsFilters />
          <Routes>
            <Route path="/" element={<BestProducts />} />
            <Route path=":productName" element={<ProductCategory />} />
          </Routes>
        </div>
      </section>
    </main>
  );
}
