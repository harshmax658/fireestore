import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./collectionItem.scss";
import "./collectionItem.css";
import { addItemInCart, setCartTotal } from "../../redux/cart/action";
import { useDispatch } from "react-redux";

const CollectionItem = ({ item }) => {
  const { imageUrl, name, price } = item;
  const dispatch = useDispatch();
  return (
    <div className="collection_item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection_footer">
        <span className="name">{name}</span>
        <span className="price">₹{price}</span>
      </div>
      <CustomButton
        onClick={() => {
          dispatch(addItemInCart(item));
          dispatch(setCartTotal());
        }}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
