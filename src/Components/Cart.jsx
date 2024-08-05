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
    <div>
      <h1>Your Cart</h1>
      <div className="flex flex-wrap gap-12 justify-center">
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <>
              <div key={index} className="p-4 border-2 border-black">
                <ProductCard product={product} />
              </div>
            </>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <h1>Total Amount :- {totalAmount}</h1>
      <h1 onClick={deleteCart}>Delete Full Cart</h1>
    </div>
  );
}

export default Cart;
