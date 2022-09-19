import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    const price = props.item.price.toFixed(2);
    return (
        <li className='cart-item'>
            <div className='cart-item__info'>
                <h2>{props.item.name}</h2>
                <div className='cart-item__amount'>
                    <span className='cart-item__price'>${price}</span>
                    <span className='cart-item__count'>x {props.item.amount}</span>
                </div>
            </div>
            <div className='cart-item__actions'>
                <button className='cart-item__button' onClick={props.onRemove}>-</button>
                <button className='cart-item__button' onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;