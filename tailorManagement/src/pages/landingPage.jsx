import React from "react";
import { useNavigate } from "react-router-dom";
import machine from './../assets/images/machine.jfif'
import "./landingPage.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <div className="landing-left">
        <h1>Tailor Management System</h1>
        <p>
          Efficiently manage your customers, orders, and payments in one place.
          Add new customers using their phone number, view or delete existing
          records, and keep your tailoring business organized.
        </p>
        <div className="landing-buttons">
          <button
            className="signup-btn"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>

      <div className="landing-right">
        {/* Optional illustration */}
        <img
             src="https://img.icons8.com/dusk/500/sewing-machine.png"
          alt="Tailor Illustration"
        />
      </div>
    </div>
  );
};

export default Landing;