import React from "react";
import FormInput from "../formInput/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
import "./signUp.scss";
import UseLoginAndSignin from "../../customHook/UseLoginAndSignin";

const SignUp = ({ display }) => {
  const { newSignup, onChangeHandler, resetHandler } =
    UseLoginAndSignin("signup");

  const { displayName, email, password, confirmPassword } = newSignup;

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password are not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName, password });
      resetHandler();
    } catch (error) {
      console.log("Error", error);
    }
  };
  console.log(display);
  return (
    <div className="sign_up">
      <h2 className="title">I do not have account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign_up_form" onSubmit={submitHandler}>
        <FormInput
          value={displayName}
          type="text"
          label="Dispaly Name"
          name="displayName"
          onChange={onChangeHandler}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={onChangeHandler}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={onChangeHandler}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={onChangeHandler}
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
