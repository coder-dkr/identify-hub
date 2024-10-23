
import React from 'react';
import { motion } from 'framer-motion';

const Movewrapper = ({ children }) => {
  const variants = {
    up: { y: -10 }, 
    down: { y: 10 }, 
  };

  return (
    <motion.div
      initial="up"
      animate="down"
      variants={variants}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse", 
      }}
    >
      {children}
    </motion.div>
  );
};

export default Movewrapper;
