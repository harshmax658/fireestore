import React from "react";
import "./customButton.scss";

const CustomButton = ({
  children,
  inverted,
  isGoogleSignIn,
  ...otherprops
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google_Sign_In" : ""
      } custom_button`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default CustomButton;
