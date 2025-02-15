import { NavLink } from "react-router-dom";
import { SIDEBAR_MENU } from "../assets/constants"

import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

const SidebarMenu = () => {

  const { menuActive, setMenuActive } = useContext(ShopContext);
  
  
  return (
    // Dark Overlay Whole Screen
    <div
      className={`max-h-screen w-full fixed inset-0 z-50 flex justify-start bg-black/40 
      ${menuActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      transition-all duration-300 ease-out`}
      onClick={() => setMenuActive(false)}
    > 
      {/* Search Modal Content */}
      <nav 
        className={`px-5 py-10 lg:px-12 lg:py-12 flex flex-col gap-[25vw] lg:gap-[5vw] h-full w-full lg:w-2/5 bg-[#EFE0D2]
        ${menuActive ? 'translate-x-0' : '-translate-x-full'}
        transition-all duration-500 ease-out`}
        onClick={e => e.stopPropagation()}
      >
        <div 
          onClick={() => setMenuActive(false)}
          className="w-full cursor-pointer group">
          <button className="w-[15vw] lg:w-[3vw] py-[0.2vw] px-[0.2vw] rounded-[0.2vw] overflow-hidden group-hover:bg-black/15 transition-colors duration-200 ease-out">
            {SIDEBAR_MENU.icons.close}
          </button>
        </div>

        <ul className="flex flex-col gap-[5vw] lg:gap-[2vw] text-[8vw] font-medium lg:text-[2vw] lg:font-medium">
          <NavLink to="/login" className="relative group" onClick={() => setMenuActive(false)}>
            <p className="group-hover:-translate-y-2 transition-all duration-300 ease-out">{SIDEBAR_MENU.createAccount}</p>
            <hr className="w-full bg-black border-none h-[3px] absolute bottom-0 -left-full opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none" />
          </NavLink>
          <NavLink to="/quiz" className="relative group" onClick={() => setMenuActive(false)}>
            <p className="group-hover:-translate-y-2 transition-all duration-300 ease-out">{SIDEBAR_MENU.quiz}</p>
            <hr className="w-full bg-black border-none h-[3px] absolute bottom-0 -left-full opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none" />
          </NavLink>
          <NavLink to="/products" className="relative group" onClick={() => setMenuActive(false)}>
            <p className="group-hover:-translate-y-2 transition-all duration-300 ease-out">{SIDEBAR_MENU.allperfumes}</p>
            <hr className="w-full bg-black border-none h-[3px] absolute bottom-0 -left-full opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none" />
          </NavLink>
          <NavLink to="/collections" className="relative group" onClick={() => setMenuActive(false)}>
            <p className="group-hover:-translate-y-2 transition-all duration-300 ease-out">{SIDEBAR_MENU.collections}</p>
            <hr className="w-full bg-black border-none h-[3px] absolute bottom-0 -left-full opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none" />
          </NavLink>

          {/* <NavLink to="/" className="relative group">
            <p className="group-hover:-translate-y-2 transition-all duration-300 ease-out">{SIDEBAR_MENU.blogs}</p>
            <hr className="w-full bg-black border-none h-[2px] absolute bottom-0 -left-full opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none" />
          </NavLink> */}
          {/* <NavLink to="/" className="relative group">
            <p className="group-hover:-translate-y-2 transition-all duration-300 ease-out">{SIDEBAR_MENU.story}</p>
            <hr className="w-full bg-black border-none h-[2px] absolute bottom-0 -left-full opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none" />
          </NavLink> */}
          {/* <NavLink to="/" className="relative group">
            <p className="group-hover:-translate-y-2 transition-all duration-300 ease-out">{SIDEBAR_MENU.careers}</p>
            <hr className="w-full bg-black border-none h-[2px] absolute bottom-0 -left-full opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none" />
          </NavLink> */}

        </ul>
      </nav>
    </div>
  )
}

export default SidebarMenu