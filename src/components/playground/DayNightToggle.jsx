import React, { useState } from "react";

const DayNightToggle = () => {
  const [isActive, setIsActive] = useState();

  return (
    <div
      className={`switch ${isActive && "active"}`}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <div className="switch-toggle">
        <div className="gradient"></div>
        <div className="circle">
          <div className="night">
            <div className="moon">
              <div className="moon-glow"></div>
              <div className="dots"></div>
              <div className="dots dots2"></div>
            </div>
            <div className="land">
              <div className="land-shape"></div>
              <div className="land-shape land-shape2"></div>
              <div className="tree"></div>
            </div>
            <div className="stars"></div>
          </div>
          <div className="day">
            <div className="cloud cloud1"></div>
            <div className="cloud cloud2"></div>
            <div className="sun"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayNightToggle;
