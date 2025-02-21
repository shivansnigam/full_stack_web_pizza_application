import React, { useState, useEffect } from "react";
import "./AppLoader.css"; // Custom CSS for styling

const AppLoader = ({ onComplete }) => {
  useEffect(() => {
    // Simulate loading time (2.5s)
    setTimeout(() => {
     
    }, 2500);
  }, [onComplete]);

  return (
    <div className="loader-container">
      <div className="pizza-loader">
        🍕 Loading your delicious pizzas...
      </div>
    </div>
  );
};

export default AppLoader;
