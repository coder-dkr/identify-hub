import React from 'react';
import { motion } from 'framer-motion';

const Fallwrapper = ({ children,extra, initialY = -50, duration = 0.6, delay = 0.2 }) => {
  return (
    <motion.div
      className={`w-full ${extra}`}
      initial={{ y: initialY, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.1 }} 
      
    >
      {children}
    </motion.div>
  );
};

export default Fallwrapper;
