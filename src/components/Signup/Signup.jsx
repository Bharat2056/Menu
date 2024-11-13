import React from "react";
import "./Signup.css";

function App() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign Up</h2>
        <p className="signin-label">Create Account and choose favourite menu</p>
        <br />
        <form>
          <div className="input-group1">
            <label>Name</label>
            <br />
            <input
              type="email"
              placeholder="Your email"
              required
              className="email-section"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <br />
            <input
              type="email"
              placeholder="Your email"
              required
              className="email-section"
            />
          </div>

          <div className="input-group1">
            <label classname="pass-name">Password</label>
            <br />
            <input
              type="password"
              placeholder="Your password"
              required
              className="password-section"
            />
          </div>

          <span className="forgot-password">Forgot Password?</span>
          <br />
          <button className="login-btn">Register</button>
        </form>

        <div className="signup-link">
          <p>
            Have an account? <a href="/signup">Sign In</a>
          </p>
        </div>

        <div className="social-login">
          By clicking Register, You agree to our <br />
          <span>Terms and Data Policy</span>
        </div>
      </div>
    </div>
  );
}

export default App;
