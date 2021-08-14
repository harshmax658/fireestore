import React from "react";
import "./cartItem.scss";

const CartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="cart_item">
      <img src={imageUrl} alt="item" />
      <div className="item_details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} × ₹{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
