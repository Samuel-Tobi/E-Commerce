import React from "react";
import "./CSS/loginSignup.css";

function LoginSignUp() {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address " />
          <input type="password" placeholder="Password " />
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">
          Already have an account? <span>Login</span>
        </p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="continue" id="continue" />
          <label htmlFor="continue">
            By continuing, i agree to the terms of use &amp; privacy policy.
          </label>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
