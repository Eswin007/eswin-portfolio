import React, { useState } from "react";
import Social from "../Social";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, setText] = useState("Figma dreams meet React reality");
  const onMouseOverHandler = () => {
    setText(
      <>
        with <i>minor</i> debugging meltdowns
      </>
    );
  };

  const onMouseLeaveHandler = () => {
    setText("Figma dreams meet React reality");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className="hero"
    >
      <div className="hero__content max-width-wrap">
        <div className="hero__left">
          <div className="hero__title title1">designer</div>
          <div className="hero__subtitle">making pixels behave.</div>
        </div>
        <div className="hero__right">
          <div
            className="hero__title title2"
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseLeaveHandler}
          >
            {"<coder>"}
          </div>
          <div className="hero__subtitle">{text}</div>
        </div>
      </div>
      <Social />
    </motion.div>
  );
};

export default Hero;
