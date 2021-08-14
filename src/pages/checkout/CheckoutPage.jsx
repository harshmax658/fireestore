import React from "react";
import "./checkOutPage.scss";
import "./checkOutPage.css";
import CheckOutItem from "../../components/checkoutitem/CheckOutItem";
import StripeButton from "../../components/stripe button/StripeButton";
import { useSelector } from "react-redux";
import CustomeButton from "../../components/custom-button/CustomButton";
import { useHistory } from "react-router-dom";

const CheckoutPage = () => {
  const history = useHistory();
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  const state = useSelector((state) => state.cartReducer);
  const { cartItems } = state;
  const totalPrice = () => {
    return cartItems.length
      ? cartItems.reduce((total, item) => {
          return (total += item.quantity * item.price);
        }, 0)
      : 0;
  };

  return (
    <div className="check_out_page">
      <div className="checkout_header">
        <div className="header_block">
          <span>Product</span>
        </div>
        <div className="header_block">
          <span>Description</span>
        </div>
        <div className="header_block">
          <span>Quantity</span>
        </div>
        <div className="header_block">
          <span>Price</span>
        </div>
        <div className="header_block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckOutItem item={item} key={item.id} />;
      })}

      {cartItems.length ? (
        <div className="total">
          <>
            {!currentUser && (
              <CustomeButton onClick={() => history.push("/signin")}>
                Login
              </CustomeButton>
            )}
            {currentUser && <StripeButton price={totalPrice()} />}
            TOTAL: ₹{totalPrice()}
          </>
        </div>
      ) : (
        <div className="center">oops!! you don't have any item</div>
      )}

      <div className="test_cards">
        <h2>Use this for payment</h2>
        <br />
        <div>4242424242424242 Visa Any 3 digits and Any future date </div>
        <br />
        <div>
          4000056655665556 Visa(debit) Any 3 digits and Any future date{" "}
        </div>
        <br />
        <div>5555555555554444 Mastercard Any 3digits and Any future date</div>
      </div>
    </div>
  );
};

export default CheckoutPage;
