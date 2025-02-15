import { NavLink } from "react-router-dom";
import { NAVBAR_CONTENT } from "../assets/constants"
import { useScroll } from "../hooks/useScroll";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";


const Navbar = () => {

  const { setModalSearchActive, setMenuActive } = useContext(ShopContext);
  const { hideNav } = useScroll();


  return (
    <header className={`${hideNav ? 'hideNavbar' : ''} h-fit px-[4.7vw] py-[4.5vw] lg:py-[1.5vw] bg-white sticky w-full top-0 z-40 transition-all duration-300 ease-in-out`}>
      <nav className="h-full">
        <ul className="flex items-center justify-between lg:justify-center h-full">

          {/* Left Side */}
          <li className="flex-1 flex items-center">
            {/* Desktop Screens UI */}
            <button
              onClick={() => setMenuActive(true)} 
              className="hidden lg:block font-semibold text-[0.85vw] tracking-wide text-black border border-slate-200 px-[1.2vw] py-[0.6vw] rounded-full 
              bg-transparent hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-in-out
              cursor-pointer"
            >
                {NAVBAR_CONTENT.menu}
            </button>
            {/* Mobile Screens UI */}
            <div className="flex lg:hidden gap-[3.8vw] items-center">
              <button 
                onClick={() => setMenuActive(true)}
                className="w-[6vw] lg:w-[1.5vw]"> 
                {NAVBAR_CONTENT.icons.menu} 
              </button>
              <button className="w-[6vw] lg:w-[1.5vw]"> {NAVBAR_CONTENT.icons.user} </button>
            </div>
          </li>

          {/* Middle Logo */}
          <NavLink to='/' className="font-semibold text-[6vw] lg:text-[1.5vw] tracking-normal h-full cursor-pointer">{NAVBAR_CONTENT.logo}</NavLink>

          {/* Right Side */}
          <li className="flex-1">
            <ul className="flex items-center justify-self-end gap-[3.8vw] lg:gap-[2.5vw] font-semibold text-xl tracking-wide text-black">

              <button className="hidden lg:block py-[0.3vw] cursor-pointer relative group"> 
                <p className="text-[1vw] leading-none">{NAVBAR_CONTENT.calendar}</p>
                <hr className="w-full bg-black border-none h-[0.1vw] absolute bottom-0 -left-full opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none" />
              </button>

              <button 
                className="w-[6vw] lg:w-[1.5vw] cursor-pointer py-[0.2vw] relative group"
                onClick={() => setModalSearchActive(true)}
              >
                {NAVBAR_CONTENT.icons.search} 
                <hr className="hidden lg:block w-full bg-black border-none h-[0.1vw] absolute bottom-0 -left-full opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none" />
              </button>

              <button className="w-[6vw] lg:w-[1.5vw] cursor-pointer block lg:hidden"> {NAVBAR_CONTENT.icons.calendar} </button>

              <NavLink to='/cart' className="w-[6vw] lg:w-[1.5vw] cursor-pointer hidden lg:block py-[0.2vw] relative group">
                <p className="absolute right-[-0.1vw] bottom-[0.3vw] w-[0.5vw] h-[0.5vw] text-center bg-red-600 text-white aspect-square rounded-full text-[10px] flex items-center justify-center"></p>
                {NAVBAR_CONTENT.icons.cart}
                <hr className="w-full bg-black border-none h-[0.1vw] absolute bottom-0 -left-full opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none" />
              </NavLink>

              <NavLink 
                to='/login' 
                className="hidden lg:flex leading-normal text-[0.8vw] tracking-wide border border-slate-200 px-[1.2vw] py-[0.6vw] rounded-full 
                        bg-black text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-500 ease-in-out
                          cursor-pointer">
                {NAVBAR_CONTENT.auth}
              </NavLink>
              
            </ul>
          </li>
        </ul>
      </nav>
    
    </header>
  )
}

export default Navbar