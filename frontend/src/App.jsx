import React from "react";
import "./App.scss";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Orders from "./pages/Orders";
import Basket from "./pages/Basket";
import ProductCategory from "./components/ProductCategory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Navigate replace to="/product" />} />
          <Route path="product" element={<Products />}>
            <Route path=":productName" element={<ProductCategory />} />
          </Route>
          <Route path="commands" element={<Orders />} />
          <Route path="basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
