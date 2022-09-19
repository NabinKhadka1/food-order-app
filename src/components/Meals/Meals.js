// import React, { useState } from "react";
import { useContext } from "react";
import "./Meals.css";
import CartContext from "../store/cart-context";
import MealsListForm from "./MealsListForm/MealsListForm";
// import Cart from "../Cart/Cart";

const Meals = (props) => {
  const price = props.item.price.toFixed(2);
  const ctx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.item.id,
      name: props.item.name,
      price: props.item.price,
      amount: amount,
    });
  };

  return (
    <li className="meals__items">
      <div className="meals__item">
        <h4>{props.item.name}</h4>
        <p>{props.item.description}</p>
        <span>${price}</span>
      </div>
      <MealsListForm
        itemId={props.item.id}
        onAddToCartHandler={addToCartHandler}
      />
    </li>
  );
};

export default Meals;
