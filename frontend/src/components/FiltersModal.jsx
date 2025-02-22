import { useContext, useEffect, useState } from "react";
import { SIDEBAR_MENU } from "../assets/constants"
import { ShopContext } from "../context/ShopContext";

const FiltersModal = () => {

  const { modalFiltersActive, setModalFiltersActive } = useContext(ShopContext);

  const [first, setfirst] = useState(false)

  // useEffect(() => {
  //   console.log(modalFiltersActive);
    
  // }, [modalFiltersActive])
  

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
        onClick={e => e.stopPropagation()}
      >
        <div 
          onClick={() => setModalFiltersActive(false)}
          className="w-full cursor-pointer group">
          <button className="w-[15vw] lg:w-[3vw] py-[0.2vw] px-[0.2vw] rounded-[0.2vw] overflow-hidden group-hover:bg-black/15 transition-colors duration-200 ease-out">
            {SIDEBAR_MENU.icons.close}
          </button>
        </div>

        <div onClick className="w-full h-14 bg-green-300 cursor-pointer"></div>


      </nav>
    </div>
  )
}

export default FiltersModal


{/* <button
type="button"
className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
>
Dropdown checkbox
</button>

<div className="z-10 hidden w-48 bg-white rounded-lg shadow-sm dark:bg-gray-700">
  <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
    <li>
      <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
        <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
        <label htmlFor="checkbox-item-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Default checkbox</label>
      </div>
    </li>
    <li>
      <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
          <input checked type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label htmlFor="checkbox-item-5" className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Checked state</label>
        </div>
    </li>
    <li>
      <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
        <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
        <label htmlFor="checkbox-item-6" className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Default checkbox</label>
      </div>
    </li>
  </ul>
</div> */}