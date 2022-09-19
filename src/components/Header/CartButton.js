import React, { useContext, useState, useEffect } from "react";
import "./CartButton.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

const CartButton = (props) => {
  const ctx = useContext(CartContext);
  const { items } = ctx;
  const [btnAnimation, setBtnAnimation] = useState(false);
  const numberofCartItems = items.reduce((curNumber, item) => {
    return curNumber + +item.amount;
  }, 0);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimation(true);
    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const btnClassName = `cart ${btnAnimation ? "bump" : ""}`;
  return (
    <button className={btnClassName} onClick={props.onClick}>
      <span className="cart__image">
        <CartIcon />
      </span>
      <span className="cart__info">Your Cart</span>
      <span className="cart__order">{numberofCartItems}</span>
    </button>
  );
};

export default CartButton;
