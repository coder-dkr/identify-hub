import React from 'react'
import Colorbox from '../components/Colorbox'


const Future = () => {
  return (
    <section id="Partners" className='flex justify-center items-center mt-28 '>
       
      <div className='w-[55%] flex flex-col items-center relative overflow-hidde '>
        <Colorbox />
        <div className='flex flex-col items-center justify-center backdrop-blur-3xl relative h-[650px] w-full shadow-[0_1px_90px_1px_black]'>
          <img src="/orbits.svg" className='absolute -top-16 -z-[5] ' alt="" />
          
          <h1 className='text-3xl md:text-5xl mt-1 pb-3 font-bold text-center'>Be part of the future of <br /><span className='inline-flex -ml-5 flex-col justify-center items-center gap-2 bg-gradient-to-b from-[#FF69B4] to-blue-600 bg-clip-text text-transparent ml-3 '>Identify-hub<img className='w-72' src="/underline.svg" alt="" /></span></h1>
       
          <p className='text-center w-2/3 text-slate-300 tracking-wider text-sm'>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>

          <div className='flex flex-wrap justify-center items-center mt-2 gap-x-5'>
            
            <button className="relative inline-flex items-center justify-center p-0.5 my-0.5 overflow-hidden text-xs font-medium rounded-2xl group bg-gradient-to-r from-blue-700 to-pink-600 ">
              <span className="relative px-3 py-2 transition-all ease-in duration-75  rounded-2xl  flex justify-center items-center ">
                Start free trial
              </span>
            </button>
          </div>

          

        </div>
      </div>
    </section>
  )
}

export default Future
