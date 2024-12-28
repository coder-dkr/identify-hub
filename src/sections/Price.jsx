
import Colorbox from '../components/Colorbox'
import { Prices } from '../../constant/constants'
import ScaleFadewrapper from '../Wrappers/ScaleFadewrapper'


const Price = () => {
  return (
    <section id="Pricing" className='flex  flex-col justify-center items-center mt-28 '>

       <button className="z-[100] relative inline-flex items-center justify-center p-0.5 my-0.5  overflow-hidden text-xs font-medium rounded-3xl group bg-gradient-to-r from-blue-700 to-pink-600 shadow-[0_1px_60px_1px]  shadow-violet-800 mt-16">
            <span className="relative px-3 py-1  transition-all ease-in duration-75 bg-black rounded-3xl  flex justify-center items-center inner-shadow m">
                Pricing
            </span>
      </button>

    <h1 className='z-[100] text-4xl text-[#fff] font-bold w-80 sm:w-96 text-center '>Our<span className='bg-gradient-to-r from-purple-400 to-[#E73DC4] bg-clip-text text-transparent '> Pricing </span>Package</h1>
       
      <div className='w-[60%] flex flex-col items-center relative overflow-hidde '>
        <Colorbox />
        <div className='flex items-center justify-center backdrop-blur-[100px] relative h-full lg:h-[650px] w-full shadow-[0_1px_90px_1px_black] '>
          <img src="/orbits.svg" className='absolute -top-16 -z-10 ' alt="" />
          
          <div className='flex gap-12 flex-col lg:flex-row  mt-5 lg:mt-0'>
          {Prices.map((item,i) => (
            <ScaleFadewrapper time={i/5} inscale={0.1} inopa={0.2} hidden={1}>
                <div key={i} className={`flex flex-col justify-start items-start w-fit bg-white/5 rounded-3xl border-2 border-white/20 px-6 py-8 gap-4 ${i == 1 ? 'md:scale-110': ""} overflow-visible`} >
                    <h1 className='text-3xl font-bold'>{item.head}</h1> 
                    <p className='text-[#CAC6DD] text-sm'>{item.sub}</p>
                    <div className='flex justify-center items-center gap-1 h-16'>
                        <p className='text-3xl '>{item.price.cur}</p>
                        <p className='text-[4rem] font-semibold '>{item.price.amount}</p>
                    </div>
                    <button className="relative inline-flex items-center justify-center p-0.5 my-0.5  overflow-hidden font-medium rounded-lg group bg-gradient-to-r from-blue-700 to-pink-600 shadow-[0_1px_60px_1px]  shadow-violet-800 w-full cursor-pointer">
                        <span className={`relative w-full text-xs px-3 py-2  transition-all ease-in duration-75 rounded-lg  flex justify-center items-center inner-shadow
                            ${i == 1 ? "" : "bg-black/80 "} `}>
                            {item.btntxt}
                        </span>
                    </button>
                    <ul className='w-full'>
                        {item.points.map((point,index) => (
                            <li key={index} className={`text-[#CAC6DD] flex items-center gap-2 ${item.points.length == (index+1) ? "" : "border-b-[0.5px] border-[#6b6b6cc2]"} py-4 w-full `}>
                                <img src="/purptick.svg" alt="" />
                                <p>{point}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </ScaleFadewrapper>
          ))}
          </div>

        <div className=''>
           

        </div>
        

        </div>
      </div>
    </section>
  )
}

export default Price
