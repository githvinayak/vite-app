import logo from "../images/logo.svg";
import { useState } from "react";
import { GrLanguage} from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";
import { navLinks } from "../constants";
const Nav = () => {
  const [ isMenuOpen , setIsMenuOpen] = useState(false);
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
    <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b shadow-sm mx-auto text-primary fixed top-0 right-0 left-0 "> 
    <div className="text-lg container mx-auto flex justify-between items-center font-semibold">
        <div className="flex space-x-14 items-center">
        <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary"  ><img src={logo} className="w-10 inline-block items-center" alt="pic" /><span>LOGO</span></a>
       <ul className="md:flex space-x-10  hidden">
                {
                    navLinks.map(({label,href}) =>(
                        <a key={href} href={href} className="block hover:text-gray-300">{label}</a>
                    ))
                }
        </ul>
        </div>
        <div className=" space-x-12 hidden md:flex items-center">
        <a href='/' className="hidden lg:flex items-center hover:text-secondary "> <GrLanguage className="mr-2"/> language</a>
        <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded-full hover:text-white hover:bg-indigo-500">Sign Up</button>
        </div>
        <div className=" md:hidden">
        <button onClick={toggleMenu}>
          {
            isMenuOpen ? ( <FaXmark className="w-6 h-66 text-primary" />) : (<FaBars className="w-6 h-6 text-primary"/>)
          }
        </button>
  
        </div>
    </div>
    </nav>
    <div className={` ${ isMenuOpen ? "space-y-4 px-4 pt-24 pb-5 text-xl bg-secondary block fixed top-0 right-0 left-0" : "hidden"} `}>
    <h1>Links</h1>
                {
                    navLinks.map(({label,href}) =>
                        <a key={href} href={href} className="block hover:text-gray-300">{label}</a>
                    )
                }
                <h1>Links</h1>
                {
                    navLinks.map(({label,href}) =>
                        <a key={href} href={href} className="block hover:text-gray-300">{label}</a>
                    )
                }
    </div>
    </>
  )
}

export default Nav