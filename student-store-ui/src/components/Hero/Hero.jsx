import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-bar">
      <div className="hero-content">
        <div className="hero-intro">
          <h1>Welcome!</h1>
          <h1>Find your merch!</h1>
          <p>
            We have all types of goods. Click on the plus button to add an item
            to your shopping cart.
          </p>
        </div>
        <div className="hero-media">
          <img
            src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
            alt="hero"
            className="hero-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
