import {useState} from 'react'
import { ChevronRight, ChevronLeft , User } from 'lucide-react';
import { Testimonials } from '../../constant/constants';
import ScaleFadewrapper from '../Wrappers/ScaleFadewrapper';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + Testimonials.length) % Testimonials.length
    );
  };

  return (
    <section id="Reviews" className='flex flex-col items-center mt-10'>
    <button className="relative inline-flex items-center justify-center p-0.5 my-0.5   overflow-hidden text-xs font-medium rounded-3xl group bg-gradient-to-r from-blue-700 to-pink-600 shadow-[0_1px_60px_1px]  shadow-violet-800 mt-16">
      <span className="relative px-3 py-1  transition-all ease-in duration-75 bg-black rounded-3xl  flex justify-center items-center inner-shadow m">
        Testimonials
      </span>
    </button>

    <h1 className='text-4xl text-[#CAD1E9] font-bold w-80 sm:w-96 text-center '>What's our user<span className='bg-gradient-to-r from-purple-800 to-[#E73DC4] bg-clip-text text-transparent '> says </span>about us</h1>

    <div className="flex relative justify-start items-center  mt-6 gap-y-6 text-[#CAD1E9] w-[65%] h-[23rem]  rounded-3xl bg-gradient-to-r from-[#00000029] to-[rgba(83_84_108_/35%)] ">
      
      <div onClick={prevSlide} className='absolute top-1/2 -translate-y-[50%] -left-6 bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full flex justify-center items-center border-2 border-solid border-blue-600 cursor-pointer z-50'>
        <ChevronLeft/>
      </div>
      <div  onClick={nextSlide} className='absolute top-1/2 -translate-y-[50%] -right-6 bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full flex justify-center items-center border-2 border-solid border-blue-600 cursor-pointer z-50'>
      <ChevronRight/>
      </div>
   
    <ScaleFadewrapper time={0} inscale={0.3} inopa={0.5} >
    <div className="relative overflow-hidden w-full flex items-center justify-start">
    
      <div className={`flex transition-transform duration-500 pl-11 gap-20 `}
        style={{
          transform: `translateX(-${currentIndex * 1104}px)`,
          width: `${Testimonials.length * 1024}px`
        }}
      >
        {Testimonials.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[1024px] h-[18rem] bg-gradient-to-tr from-[rgba(83_84_108_/20%)] to-[rgba(83_84_108_/30%)] rounded-3xl border-2 border-[#27283499] mx-auto"
          >
            <div className="flex justify-start p-5 items-center gap-x-3">
              <div className="p-2 flex justify-center items-center border-2 border-white rounded-full">
                <User />
              </div>
              <div>
                <p className="text-white font-bold text-xl tracking-wider">
                  {item.name}
                </p>
                <p className="text-[#CAD1E9]">
                  {item.job} • {item.time}
                </p>
              </div>
            </div>
            <p className="px-[4.59rem] text-[#CAD1E9]">{item.para}</p>
          </div>
        ))}
      </div>
  
      <div className="indicators flex justify-center items-center absolute bottom-[20%] left-1/2 -translate-x-[50%] gap-5">
        {Testimonials.map((_, i) => (
          <div
            key={i}
            onClick={()=> setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              currentIndex === i ? "bg-pink-500" : "bg-white"
            }`}
          ></div>
        ))}
      </div>

    </div>
    </ScaleFadewrapper>

    </div>
  </section>      

  )
}

export default Reviews


 
