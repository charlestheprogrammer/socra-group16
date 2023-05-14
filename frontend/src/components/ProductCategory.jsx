import React from "react";

import { useParams } from "react-router-dom";
import categories from "../data/categories";
import Product from "./Product";
import { useSelector } from "react-redux";

export default function ProductCategory() {
  const { productName } = useParams();

  const [category, setCategory] = React.useState({});

  React.useEffect(() => {
    setCategory(categories[productName]);
    console.log(categories[productName]);
  }, [productName]);

  const gardens = useSelector((state) => state.gardens.items);
  const fetched = useSelector((state) => state.gardens.fetched);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const newProducts = [];
    let productNameHere = productName;
    if (productNameHere === "drink") productNameHere = "juice";
    if (productNameHere === "red-meat") productNameHere = "red_meat";
    for (const garden of gardens) {
      if (garden.products[productNameHere]) {
        if (productNameHere !== "red_meat") {
          newProducts.push(
            ...garden.products[productNameHere].map((item) => ({
              ...item,
              distance: garden.distance,
              id: garden.id + item.name,
              gardenId: garden.id,
              gardenName: garden.title,
              img: `https://source.unsplash.com/1600x1000/?${productName}&sig=${Math.floor(
                Math.random() * 1000
              )}`,
            }))
          );
        } else {
          garden.products[productNameHere].map((item) => {
            const beefName = item.beef.name;
            const randomSeed = Math.floor(Math.random() * 1000);
            newProducts.push(
              ...item.parts.map((part) => ({
                ...part,
                name: beefName + " - " + part.name,
                distance: garden.distance,
                id: garden.id + beefName + part.name,
                gardenId: garden.id,
                gardenName: garden.title,
                img:
                  "https://source.unsplash.com/1600x1000/?beef&sig=" +
                  randomSeed,
              }))
            );
          });
        }
      }
    }
    console.log(newProducts);
    setProducts(newProducts);
  }, [gardens, productName]);

  if (!fetched)
    return (
      <div className="products-left" id="view">
        <h4>Récupération des produits en cours...</h4>
      </div>
    );

  if (products.length === 0)
    return (
      <div className="products-left" id="view">
        <h4>Aucun produit trouvé</h4>
      </div>
    );

  return (
    <div className="products-left" id="view">
      <h1>{category.name}</h1>
      <div className="products-list">
        {products &&
          products.map((product, index) => (
            <Product key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
}
