import React, { useState } from "react";

const Avatar = () => {
  const [direction, setDirection] = useState("");
  return (
    <div className="avatar-wrap">
      <div
        className="left"
        onMouseOver={() => setDirection("look-left")}
        onMouseLeave={() => setDirection("")}
      ></div>
      <div className={`head ${direction}`} id="head">
        <div className="hair"></div>
        <div className="beard">
          <div className="mouth"></div>
        </div>
        <div className="eyes">
          <div className="eye left"></div>
          <div className="eye right"></div>
        </div>
      </div>
      <div
        className="right"
        onMouseOver={() => setDirection("look-right")}
        onMouseLeave={() => setDirection("")}
      ></div>
    </div>
  );
};

export default Avatar;
