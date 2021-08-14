import React from "react";
import UseLoginAndSignin from "../../customHook/UseLoginAndSignin";
import FormInput from "../formInput/FormInput";
import "./signin.scss";
import CustomButton from "../custom-button/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase";

const SignIn = () => {
  const { login, onChangeHandler, resetHandler } = UseLoginAndSignin("login");
  const { email, password } = login;

  const loginHandler = async (e) => {
    e.preventDefault();
    if (email.trim().length > 5 && password.length > 5) {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        resetHandler();
      } catch (error) {
        console.log("Error", error);
      }
    }
  };
  return (
    <div className="login">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={loginHandler}>
        <FormInput
          value={email}
          type="email"
          name="email"
          label="Email"
          onChange={onChangeHandler}
        />

        <FormInput
          value={password}
          type="password"
          label="Password"
          name="password"
          onChange={onChangeHandler}
        />
        <div className="buttons">
          <CustomButton value="Login">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn value="Login">
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
