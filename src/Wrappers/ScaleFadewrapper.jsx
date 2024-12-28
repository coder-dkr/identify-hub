import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScaleFadewrapper = ({ children , time , inscale, inopa , hidden = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-10%' }); 

  const variants = {
    hidden: {
      scale: inscale,
      opacity: inopa,
      transition: {
        duration: 0.7,
        ease: 'easeInOut',
      },
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7 + time,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: hidden - 1 ? 'hidden' : 'visible', 
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleFadewrapper;
