import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="about-wrap"
    >
      <div className="about max-width-wrap">
        <div className="about__title">about.</div>
        <div className="about__subtitle">
          I'm a UI/UX Designer based in Kerala, India.
        </div>
        <div className="about__body">
          Since 2016, I’ve enjoyed untangling complex problems and transforming
          them into simple, elegant designs. When I’m not pushing pixels, you’ll
          probably find me gazing at the starry night—pondering the mysteries of
          the universe… or just questioning whether my latest design choice is
          brilliance or pure luck.
        </div>

        <div className="about__body">
          I thrive at the crossroads of design and technology, turning ideas
          into engaging, functional experiences. Whether it’s crafting intuitive
          UI in Figma, designing stunning visuals in Photoshop and Illustrator,
          or adding motion magic with After Effects and Premiere Pro, I love
          blending creativity with precision. My skills go beyond design—I write
          clean, structured code using HTML, CSS, SCSS, JavaScript, and React,
          ensuring smooth front-end development. And when I’m not knee-deep in
          design tools or debugging code, you’ll likely find me behind a camera,
          capturing moments through photography—because whether it’s a UI or a
          perfect shot, composition is everything!
        </div>
      </div>
    </motion.div>
  );
};

export default About;
