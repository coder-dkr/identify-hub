import { FooterNavitems } from '../../constant/constants'


const Footer = () => {
  return (
    <footer className='text-[#CAD1E9] px-14 flex flex-col'>
        <div className='flex justify-between items-center py-3'>
            <a href="/" className="flex justify-center items-center gap-2">
                <img src="/logo.svg" width={20} alt="" />
                <h1 className="font-mono text-xl">IdentifyHub</h1>
            </a>

            <ul className='flex items-center justify-center gap-4'>
                {FooterNavitems.map((item,i) => (
                    <li key={i} className='uppercase font-medium text-xs hover:text-white cursor-pointer duration-200 hover:-translate-y-[2px]'>{item}</li>
                ))}
            </ul>
        </div>

        <hr className='border-t-[#404040]' />

        <div className='flex justify-between items-center py-3 pb-7'>
            <div className="tracking-wider text-xs font-normal">
               &copy; identifyhub 2024, All rights reserved
            </div>

            <img className='cursor-pointer' src="/social.svg" alt="" />
        </div>
    </footer>
  )
}

export default Footer
