import { li } from "framer-motion/client"
import { Featurecontent } from "../../constant/constants"
import Slidein from "../Wrappers/Slidein"

const Features = () => {
  return (
    <section id="Features" className='flex flex-col items-center'>
      <button className="relative inline-flex items-center justify-center p-0.5 my-0.5   overflow-hidden text-xs font-medium rounded-3xl group bg-gradient-to-r from-blue-700 to-pink-600 shadow-[0_1px_60px_1px]  shadow-violet-800 mt-16">
        <span className="relative px-3 py-1  transition-all ease-in duration-75 bg-black rounded-3xl  flex justify-center items-center inner-shadow m">
          Features
        </span>
      </button>

      <h1 className='text-4xl text-[#CAD1E9] font-bold w-80 sm:w-96 text-center '>Why<span className='bg-gradient-to-r from-purple-800 to-[#E73DC4] bg-clip-text text-transparent '> choose </span>us</h1>

      <p className='text-center w-1/4 mt-3 text-slate-300 tracking-widest text-sm'>We are the only service that provides all 3 services as a packaged service</p>

      <div className="flex flex-col justify-between items-center mt-6 gap-y-6 text-[#CAD1E9]">
        {Featurecontent.map((content, i) => (
          <Slidein index={i} key={i}>
          <div className="flex md:flex-row flex-col items-center gap-5 bg-gradient-to-r from-[#00000029] to-white/10 rounded-xl backdrop-blur-xl px-2 md:px-6 py-4">
            <div className="flex justify-center items-start gap-5">
              <img className="" src={content.sidesvg} alt="" />
              <div className="flex flex-col gap-9 w-[450px]">
                <h3 className="font-medium text-2xl mt-1">{content.title}</h3>
                <ul className="list-['✔️'] flex flex-col gap-8 text-sm">
                  {content.points.map((point, idx) => (
                    <li className="" key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
            <img src={content.banner} alt="" />
          </div>
          </Slidein>
        ))}
      </div>
    </section>
  )
}

export default Features
