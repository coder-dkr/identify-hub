import { useState } from "react";
import { Navitems } from "../../constant/constants";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    const handleclick = (item) => {
        setIsOpen(false)
        const element = document.getElementById(item)

        if(element){
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <>
            <nav className="container mx-auto flex justify-between items-center my-3 border-[1px] border-gray-700 rounded-lg px-3 py-1 text-[#CAD1E9] w-2/3 backdrop-blur-md">
                <a href="/" className="flex justify-center items-center gap-2">
                    <img src="/logo.svg" width={20} alt="" />
                    <h1 className="font-mono text-xl">IdentifyHub</h1>
                </a>

               
                <div className="block md:hidden cursor-pointer" onClick={toggleMenu}>
                    <span className="text-xl">☰</span>
                </div>

              
                <ul className="hidden md:flex justify-center items-center text-sm gap-3">
                    {Navitems.map((item, i) => (
                        <li onClick={()=>{handleclick(item)}} key={i} className="cursor-pointer hover:text-white duration-200 hover:-translate-y-[1px]">{item}</li>
                    ))}
                </ul>

            
                <div className="hidden md:block">
                    <button className="relative inline-flex items-center justify-center p-0.5 my-0.5 overflow-hidden text-xs font-medium rounded-lg group bg-gradient-to-r from-blue-700 to-pink-600">
                        <span className="relative px-2 py- pr-0.5 transition-all ease-in duration-75 bg-black rounded-md flex justify-center items-center inner-shadow">
                            Start free trial <ChevronRight className="w-4 pt-0.5" />
                        </span>
                    </button>
                </div>
            </nav>

            <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-md transition-opacity duration-300 ${isOpen ? 'opacity-100 z-50' : 'opacity-0 z-0 pointer-events-none'}`}>
                <div className={`fixed top-0 right-0 w-64 h-full bg-gray-800 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} shadow-lg`}>
                   
                    <button className="absolute top-4 right-4 text-white" onClick={toggleMenu}>
                        &times; 
                    </button>
                    <ul className="flex flex-col items-start p-4 text-sm">
                        {Navitems.map((item, i) => (
                            <li onClick={()=>{handleclick(item)}} key={i} className="cursor-pointer hover:text-white duration-150 my-2">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
