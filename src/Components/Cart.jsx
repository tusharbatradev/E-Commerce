import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/cartSlice";
import ProductCard from "./ProductCard";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteCart = () => {
    dispatch(clearCart());
  };

  let totalAmount = 0;
  for (let i = 0; i < cart.length; i++) {
    totalAmount += cart[i].price;
  }

  return (
    <div className="flex gap-[10px] flex-col">
      <h1 className="text-2xl">Your Cart</h1>
      <div className="flex flex-wrap gap-8 justify-center h-[420px]">
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <>
              <div key={index} className="p-4">
                <ProductCard product={product} />
              </div>
            </>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div>
      <h1>Total Amount :- {totalAmount}</h1>
      <br />
      <button className="bg-black text-white p-2 rounded-xl">Checkout</button>
      <br />
      <button className="cursor-pointer bg-slate-400 p-2 rounded-xl mt-2" onClick={deleteCart}>Delete Full Cart</button>
      </div>
    </div>
  );
}

export default Cart;
