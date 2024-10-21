import { Navitems } from "../../constant/constants"
import { ChevronRight } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="container mx-auto flex justify-between items-center my-3 border-[1px] border-gray-700 rounded-lg px-3 py-1 text-[#CAD1E9] w-2/3">
            <div className="flex justify-center items-center gap-2">
                <img src="/logo.svg" width={20} alt="" />
                <h1 className="font-mono text-xl">IdentifyHub</h1>
            </div>

            <ul className="flex justify-center items-center text-sm gap-3">
                {Navitems.map((item, i) => (
                    <li key={i} className="cursor-pointer hover:text-white duration-150" >{item}</li>
                ))}
            </ul>

            <button className="relative inline-flex items-center justify-center p-0.5 my-0.5   overflow-hidden text-xs font-medium rounded-lg group bg-gradient-to-r from-blue-700 to-pink-600 ">
                <span class="relative px-2 py- pr-0.5 transition-all ease-in duration-75 bg-black rounded-md  flex justify-center items-center inner-shadow">
                   Start free trial <ChevronRight className="w-4 pt-0.5"/>
                </span>
            </button>
        </nav>
    )
}

export default Navbar
