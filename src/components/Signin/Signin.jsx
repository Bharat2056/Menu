import React from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate=useNavigate()

  const handleClick=()=>{
    navigate('/signup')
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>
          Welcome Back{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h2>
        <p className="signin-label">Sign to your account</p>
        <br />
        <form>
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
          <button onClick={handleClick} className="login-btn" >Login</button>
        </form>

        <div className="signup-link">
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>

        <div className="or-divider">
          <span>Or with</span>
        </div>

        <div className="social-login">
          <button className="google-btn">Sign in with Google</button>
          <br />
          <button className="apple-btn">Sign in with Apple</button>
        </div>
      </div>
    </div>
  );
}

export default App;
