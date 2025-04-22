import { useState } from "react";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import "../styles/signIn.css";

const AuthPageContainer = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={`auth-wrapper ${isSignUp ? "active" : ""}`}>
      <div className="forms-container">
        <SignIn />
        <SignUp />
        <div className="toggle-box">
          <div className="toggle-pannel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an Acount ?</p>
            <button
              className="in-up-btn toggle-btn  signup-btn"
              onClick={() => {
                setIsSignUp(true);
              }}
            >
              Sign UP
            </button>
          </div>
          <div className="toggle-pannel toggle-right">
            <h1>Welcome Back !</h1>
            <p>Already have an Account ?</p>
            <button
              className="in-up-btn toggle-btn login-btn"
              onClick={() => {
                setIsSignUp(false);
              }}
            >
              Log IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPageContainer;
