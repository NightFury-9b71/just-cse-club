// components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // To navigate after login
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // To navigate after login

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., validate credentials, send to API)
    console.log("Logging in with", email, password);

    // On successful login, redirect to home or events
    navigate("/");  // Redirect to home page after successful login
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button id="login" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
