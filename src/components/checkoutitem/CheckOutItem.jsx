import React from "react";
import "./checkOutItem.scss";
import "./checkOutItem.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  removeItemFromCart,
  addItemInCart,
  decreaseQuantityOfItem,
  setCartTotal,
} from "../../redux/cart/action";
import { useDispatch } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CheckOutItem = ({ item }) => {
  const { imageUrl, name, price, quantity, id } = item;

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeItemFromCart(id));
    dispatch(setCartTotal());
  };
  return (
    <div className="checkout_item">
      <div className="image_container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <button
          className="incDecButton"
          onClick={() => {
            dispatch(decreaseQuantityOfItem(id));
            dispatch(setCartTotal());
          }}
        >
          <IoIosArrowBack />
        </button>
        <span>{quantity}</span>
        <button
          className="incDecButton"
          onClick={() => {
            dispatch(addItemInCart(item));
            dispatch(setCartTotal());
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>

      <span className="price">₹{price}</span>
      <span className="remove_button">
        <button onClick={removeHandler}>
          <RiDeleteBin5Line />
        </button>
      </span>
    </div>
  );
};

export default CheckOutItem;
