
import React from 'react';
import { motion } from 'framer-motion';

const Movewrapper = ({ children }) => {
  const variants = {
    up: { y: -10 }, // Move up by 10 pixels
    down: { y: 10 }, // Move down by 10 pixels
  };

  return (
    <motion.div
      initial="up"
      animate="down"
      variants={variants}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse", // This will reverse the animation back to the start
      }}
    >
      {children}
    </motion.div>
  );
};

export default Movewrapper;
