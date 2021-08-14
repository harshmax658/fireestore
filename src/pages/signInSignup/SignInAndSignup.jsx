import React from "react";
import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signUp/SignUp";
import "./signInAndSignup.scss";
import "./signInAndSignup.css";
import CustomButton from "../../components/custom-button/CustomButton";
import { useState } from "react";
import { useEffect } from "react";

const SignInAndSignup = () => {
  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false);
  console.log(login);

  useEffect(() => {
    if (window.innerWidth < 900) {
      setShow(!show);
    }
  }, [show]);

  return (
    <>
      {show && (
        <>
          <div className="btn">
            <CustomButton onClick={() => setLogin(!login)}>
              {login ? "Login" : "Sign Up"}
            </CustomButton>
          </div>

          <>
            <div className="signIn_and_signUp">
              {!login ? <SignIn /> : <SignUp />}
            </div>
          </>
        </>
      )}
      {!show && (
        <>
          <div className="signIn_and_signUp">
            <SignIn /> <SignUp />
          </div>
        </>
      )}
    </>
  );
};

export default SignInAndSignup;
