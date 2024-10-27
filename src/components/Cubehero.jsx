import { motion } from "framer-motion"
import Movewrapper from "../Wrappers/Movewrapper"

const Cubehero = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center text-slate-200'>

      <div className='h-32 lg:h-[300px] flex flex-col justify-between items-center mt-6 lg:mt-0'>

        <motion.div 
        initial={{ y: -50, x: -150 , opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 0.8 , delay: 1 }}
        className="bg-gradient-to-br from-transparent to-white/15 backdrop-blur-xl border-[1px] border-white/20 rounded-2xl px-2 py-1 text-xs flex justify-center group cursor-pointer items-center gap-3">
          <img className="group-hover:animate-bounce duration-1000" src="/tick.svg" alt="" />
          <div>
            <p>One-time passcode</p>
            <p>KABBADI</p>
          </div>
        </motion.div>
        
        <motion.div 
        initial={{ y: 50, x: -150 , opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 0.8 , delay: 1.3 }}         
        className="bg-gradient-to-br from-transparent to-white/15 backdrop-blur-xl border-[1px] border-white/20 rounded-2xl px-2 py-1 text-xs flex justify-center group cursor-pointer items-center gap-3">
          <img className="group-hover:animate-bounce duration-1000" src="/card.svg" alt="" />
          <div>
            <p>Credit card</p>
            <p>123 456 789 1234</p>
          </div>
        </motion.div>

      </div>
      <Movewrapper><img className='w-96' src="/cube.svg" alt="" /></Movewrapper>

      <div className='h-32 lg:h-[300px] flex flex-col justify-between items-center mt-6 lg:mt-0'>

        <motion.div
        initial={{ y: -50, x: 150 , opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 0.8 , delay: 1.1 }}     
        className="bg-gradient-to-br from-transparent to-white/15 backdrop-blur-xl border-[1px] border-white/20 rounded-2xl px-2 py-1 text-xs flex justify-center group cursor-pointer items-center gap-3">
          <img className="group-hover:animate-bounce duration-1000" src="/call.svg" alt="" />
          <div>
            <p>Phone numbers</p>
            <p>+91 8917382738</p>
          </div>
        </motion.div>

        <motion.div
        initial={{ y: 50, x: 150 , opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 0.8 , delay: 1.2 }}      
        className="bg-gradient-to-br from-transparent to-white/15 backdrop-blur-xl border-[1px] border-white/20 rounded-2xl px-2 py-1 text-xs flex justify-center group cursor-pointer items-center gap-3">
          <img className="group-hover:animate-bounce duration-1000" src="/email.svg" alt="" />
          <div>
            <p>Email address</p>
            <p>dhruv@roy.com</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Cubehero
