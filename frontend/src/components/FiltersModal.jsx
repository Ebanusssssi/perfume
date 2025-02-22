import { useContext } from "react";
import { SIDEBAR_MENU } from "../assets/constants"
import { ShopContext } from "../context/ShopContext";

const FiltersModal = () => {

  const { modalFiltersActive, setModalFiltersActive } = useContext(ShopContext);

  

  return (
    <div
      className={`max-h-screen w-full fixed inset-0 z-50 flex justify-end bg-black/40 
      ${modalFiltersActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      transition-all duration-300 ease-out`}
      onClick={() => setModalFiltersActive(false)}
    > 
      {/* Search Modal Content */}
      <nav 
        className={`px-5 py-10 lg:px-12 lg:py-12 flex flex-col gap-[25vw] lg:gap-[5vw] h-full w-full lg:w-5/12 bg-white
        ${modalFiltersActive ? 'translate-x-0' : 'translate-x-full'}
        transition-all duration-500 ease-out`}
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          onClick={() => setModalFiltersActive(false)}
          className="w-full cursor-pointer group">
          <button className="w-[15vw] lg:w-[3vw] py-[0.2vw] px-[0.2vw] rounded-[0.2vw] overflow-hidden group-hover:bg-black/15 transition-colors duration-200 ease-out">
            {SIDEBAR_MENU.icons.close}
          </button>
        </div>

        <div className="w-full h-14 bg-green-300 cursor-pointer"></div>


      </nav>
    </div>
  )
}

export default FiltersModal