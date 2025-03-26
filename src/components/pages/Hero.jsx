import React, { useState } from "react";
import Social from "../Social";
import { motion } from "framer-motion";
import heroImage1 from '../../assets/hero1.jpg'
import heroImage2 from '../../assets/hero2.jpg'

const Hero = () => {
  const [text, setText] = useState("Figma dreams meet React reality");
  const [imageHover, setImageHover] = useState('');
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

  const onImageHoverHandler = () =>{
    setImageHover('hovered')
  }

  // const onImageLeaveHandler = ()=>{
  //   setImageHover('')
  // }

  // const onImageLeaveHandler = () =>{
  //   setImageHover('')
  // }

  return (
    <div
    
      className="hero"
    >
      <div className="hero__content max-width-wrap">
        <div className="hero__image">
          <div className={`image image1 `}>
            <img src={heroImage1} alt=""/>
            {/* <div className="placeholder" ></div> */}
          </div>
          <div className={`image image2 ${imageHover}`}>
            <img src={heroImage2} alt=""/>
            {/* <div className="placeholder"></div> */}

          </div>
        </div>
        <div className="hero__left" onMouseOver={()=>setImageHover('left-hovered')} onMouseLeave={()=>setImageHover('')}>
          <div className="hero__title title1">designer</div>
          <div className="hero__subtitle">making pixels behave.</div>
        </div>
        <div className="hero__right" onMouseOver={()=>setImageHover('right-hovered')} onMouseLeave={()=> setImageHover('')} >
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
    </div>
  );
};

export default Hero;
