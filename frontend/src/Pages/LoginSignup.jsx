import React from "react";
import "./Css/LoginSingup.css";
export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email Address" />
          <input type="password" placeholder="Your password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account?<span> Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
