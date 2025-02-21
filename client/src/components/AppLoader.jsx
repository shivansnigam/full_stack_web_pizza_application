import React, { useEffect } from "react";
import "./AppLoader.css"; // Custom CSS

const AppLoader = ({ onComplete }) => {
  useEffect(() => {
    // Simulate loading time (3s)
    const timer = setTimeout(() => {
       
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="loader-container">
      <div className="oven">
        <div className="pizza">
          <div className="cheese"></div>
          <div className="pepperoni pepperoni1"></div>
          <div className="pepperoni pepperoni2"></div>
          <div className="pepperoni pepperoni3"></div>
        </div>
      </div>
      <p className="loading-text">Baking your delicious pizza... 🍕🔥</p>
    </div>
  );
};

export default AppLoader;
