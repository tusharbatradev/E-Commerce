import React from "react";
import "./App.css";
import Products from "./Components/Products";
import { Outlet } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import { useSelector } from "react-redux";
import Header from "./Components/Header";

function App() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Header cart={cart} />
      <div className="p-8 flex flex-col gap-6">
        <Outlet />
      </div>
    </>
  );
}

export default App;
