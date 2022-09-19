import React, { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import "./Cart.css";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1});
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };
  const cartElements = (
    <ul className="cart__items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
        // <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClose={props.onHideCart}>
      <div className="modal__header">{cartElements}</div>
      <div className="modal__body">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="modal__footer">
        {hasItems && (
          <Button
            type="button"
            input={{
              id: "cl1",
              label: "Close",
              onClick: props.onHideCart,
              className: "btn-close",
            }}
          />
        )}
        {hasItems && (
          <Button
            type="button"
            input={{ id: "o1", label: "Order", className: "btn-order" }}
          />
        )}

        {/* <button type="button" onClick={props.onHideCart}>Close</button> */}
        {/* <button>Order</button> */}
      </div>
    </Modal>
  );
};

export default Cart;
