import { motion } from 'framer-motion';

const Slidein = ({ children,extra, initialX = 150, duration = 0.8, delay = 0.5,index }) => {
  return (
    <motion.div
      className={`w-full ${extra}`}
      initial={{ x: index % 2 != 0 ? initialX : 0-initialX, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration, delay }}
      viewport={{ amount: 0.2 }} 
      
    >
      {children}
    </motion.div>
  );
};

export default Slidein
;
