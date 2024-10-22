import React from 'react';
import { motion } from 'framer-motion';

const Fallwrapper = ({ children, initialY = -50, duration = 0.6, delay = 0.2 }) => {
  return (
    <motion.div
      className='w-full'
      initial={{ y: initialY, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.1 }} // Animate once when 10% of the component is in view
    >
      {children}
    </motion.div>
  );
};

export default Fallwrapper;
