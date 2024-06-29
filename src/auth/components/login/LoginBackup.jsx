// src/components/Login.jsx
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig/firebaseConfig";
import { NavLink, useNavigate } from "react-router-dom";
import "./LoginCSS.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("login done");
        // navigate("/admin");
        window.location.href = "/admin";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError("Invalid email or password. Please try again.");
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>
          <i className="fas fa-user-alt"></i>&nbsp;RKDK Admin
        </h1>
        <p>Welcome back! Please login to your account.</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={onLogin}>
          <div className="input-group">
            <label htmlFor="email-address">Email Address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <p className="signup-link">
          Have you a Login Problem?{" "}
          <NavLink to="/reset-password">Reset Password</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
