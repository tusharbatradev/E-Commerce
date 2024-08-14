import React from "react";
import { Outlet } from "react-router-dom";
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
