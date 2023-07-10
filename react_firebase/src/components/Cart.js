import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../features/cart/CartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state) => state.cart);
  return (
    <div className="cartIcon">
      <h3
        onClick={() => {
          dispatch(setShowCart());
        }}
      >
        Cart: {totalQuantity} Items
      </h3>
    </div>
  );
};

export default Cart;
