import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  const deleteCart = () => {
    dispatch(clearCart())
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="flex flex-wrap gap-12 justify-center">
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <div key={index} className="p-4 border-2 border-black">
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24"
              />
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <h1 onClick={deleteCart}>Delete Full Cart</h1>
    </div>
  );
}

export default Cart;
