import React, { useState } from "react";

const HeartToggle = () => {
  const [isActive, setIsActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isActive) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setIsActive(false);
      }, 500);
    } else {
      setIsActive(true);
    }
  };

  return (
    <div
      className={`heart-container ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <div
        className={`trigger ${
          isActive ? (isAnimating ? "switchAnimReverse" : "switchAnim") : ""
        }`}
      ></div>
      <div className="side side--left"></div>
      <div className="side side--right"></div>
    </div>
  );
};

export default HeartToggle;
