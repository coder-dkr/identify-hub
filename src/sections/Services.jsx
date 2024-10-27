import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Serviceitem } from '../../constant/constants'
import ScaleFadewrapper from '../Wrappers/ScaleFadewrapper'

const Services = () => {
    return (
        <section id="Services" className='flex flex-col items-center '>

            <button className="relative inline-flex items-center justify-center p-0.5 my-0.5   overflow-hidden text-xs font-medium rounded-3xl group bg-gradient-to-r from-blue-700 to-pink-600 shadow-[0_1px_60px_1px]  shadow-pink-800 mt-16">
                <span className="relative px-3 py-1  transition-all ease-in duration-75 bg-black rounded-3xl  flex justify-center items-center inner-shadow m">
                    services
                </span>
            </button>

            <h1 className='text-4xl text-[#CAD1E9] font-bold w-80 sm:w-96 text-center '>See our serivces for secure your <span className='bg-gradient-to-r from-purple-900 to-pink-800 bg-clip-text text-transparent '>Data</span> </h1>

            <p className='text-center w-[40%] mt-3 text-slate-300 tracking-widest text-sm'>Make your data invisible by generating unlimited identities. The next-level in privacy protection for online and travel</p>

            <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-12 mt-14 text-[#CAD1E9] px-2'>
                {Serviceitem.map((item,i) => (
                   <ScaleFadewrapper key={i} time={i/5}> 
                     <div className='relative flex items-center justify-center group'> 
                        <img className='w-80 bg-[url("/contgrad.svg")] bg-cover bg-right' src="/container.svg" alt="" />
                        <div className='absolute top-4 left-8 flex flex-col justify-center items-start gap-3'>
                            <img src={item.img} alt="hey" />
                            <p className='text-2xl font-medium'>{item.title}</p>
                            <p className='text-sm font-thin pr-2'>{item.sub}</p>
    
                            <button className='flex justify-center items-center text-white font-mono group-hover:text-blue-400 duration-100'>Explore More <ChevronRight className='w-5 group-hover:translate-x-3 duration-150'/></button>
                     </div>
                    </div>
                   </ScaleFadewrapper>
                ))}
            </div>

        </section>
    )
}

export default Services
