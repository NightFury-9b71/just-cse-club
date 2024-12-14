// components/Home.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Club</h1>
      <p>We are excited to have you join us. Become part of our amazing community!</p>
      <Link to="/login">
        <button className="join-us-btn">Join Us</button>
      </Link>
    </div>
  );
};

export default Home;
