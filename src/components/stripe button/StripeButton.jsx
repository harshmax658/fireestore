import React from "react";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cart/action";

const StripeButton = ({ price }) => {
  const dispatch = useDispatch();
  const priceForStripe = price * 100;
  const history = useHistory();
  const publishKey =
    "pk_test_51JMw5eSBu4fDgDaaxZvhiG7ipxoQIjexvh5xiNbNoCdqosboFk0innCXEkb9XCcsOpzuTegkdpgyxi8ZRG3eBWtF004wNQrxB2";

  const onToken = (tokten) => {
    console.log(tokten);
    alert("Payment Succesfull");
    dispatch(resetCart());
    history.push("/");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="FireEStore"
      image="/bluefire.png"
      billingAddress
      shippingAddress
      currency="INR"
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

export default StripeButton;
