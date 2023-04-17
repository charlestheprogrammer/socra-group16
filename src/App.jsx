import React from "react";
import "./App.scss";
import Layout from "./components/Layout";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Commands from "./pages/Commands";
import Basket from "./pages/Basket";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Navigate replace to="/product" />} />
        <Route path="/product/:productName?" element={<Product />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
