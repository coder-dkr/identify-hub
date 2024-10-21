import React from 'react'
import Navbar from '../components/Navbar'
import Colorbox from '../components/Colorbox'
import Cubehero from '../components/Cubehero'

const Home = () => {
  return (
    <section className='flex flex-col items-center '>
      <div className='absolute -z-10'><img className='block h-[50v]' src="/overlay.svg"></img></div>
      <Navbar />

      <div className='w-[55%] flex flex-col items-center relative  '>
        <Colorbox />
        <div className='flex flex-col items-center backdrop-blur-2xl relative'>
          <img src="/orbits.svg" className='absolute -top-16 -z-[5]' alt="" />
          <button className="relative inline-flex items-center justify-center p-0.5 my-0.5   overflow-hidden text-xs font-medium rounded-3xl group bg-gradient-to-r from-blue-700 to-pink-600 shadow-[0_1px_60px_1px]  shadow-pink-800 mt-10">
            <span class="relative px-3 py-1  transition-all ease-in duration-75 bg-black rounded-3xl  flex justify-center items-center inner-shadow">
              Secure your data
            </span>
          </button>

          <h1 className='text-5xl mt-1 pb-3 font-bold bg-gradient-to-b from-[#FF69B4] to-blue-600 bg-clip-text text-transparent w-full text-center'>Identify-hub is a better way to achieve <span className='inline-flex -ml-5 flex-col justify-center items-center gap-2'>privacy<img className='w-52' src="/underline.svg" alt="" /></span></h1>

          <p className='text-center w-2/3 text-slate-300 mt-2 tracking-wider text-sm'>Make your data invisible by generating unlimited identities. The next-level in privacy protection for online and travel</p>


          <div className='flex justify-center items-center my-3 gap-x-5'>
            <button className="relative inline-flex items-center justify-center p-0.5 my-0.5  overflow-hidden text-xs font-medium rounded-3xl group bg-gradient-to-r from-blue-700 to-pink-600 ">
              <span class="relative px-3 py-2 transition-all ease-in duration-75 bg-black rounded-3xl  flex justify-center items-center inner-shadow">
                Start free trial
              </span>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 my-0.5   overflow-hidden text-xs font-medium rounded-3xl group bg-gradient-to-r from-blue-700 to-pink-600 ">
              <span class="relative px-3 py-2 transition-all ease-in duration-75  rounded-3xl  flex justify-center items-center ">
                Use it Now
              </span>
            </button>
          </div>

          <Cubehero/>

        </div>
      </div>

    </section>


  )
}

export default Home
