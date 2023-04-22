import React from "react";

import { useParams } from "react-router-dom";
import categories from "../data/categories";
import Product from "./Product";

export default function ProductCategory() {
  const { productName } = useParams();

  const [category, setCategory] = React.useState({});

  React.useEffect(() => {
    setCategory(categories[productName]);
    console.log(categories[productName]);
  });

  return (
    <div className="products-left" id="view">
      <h1>{category.name}</h1>
      <div className="products-list">
        {category.products &&
          category.products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
}
