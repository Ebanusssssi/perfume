import { useContext } from "react";
import { BRANDS, CLASSES, FAMILIES, GENDERS, NOTES, SIDEBAR_MENU, STYLES } from "../assets/constants"
import { ShopContext } from "../context/ShopContext";

const FiltersModal = () => {

  const { modalFiltersActive, setModalFiltersActive } = useContext(ShopContext);

  

  return (
    // Overlay
    <div
      className={`max-h-screen w-full fixed inset-0 z-50 flex justify-end bg-black/40 
      ${modalFiltersActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      transition-all duration-300 ease-out`}
      onClick={() => setModalFiltersActive(false)}
    > 
      {/* Search Modal Content */}
      <div
        className={`px-[9vw] py-[5vw] lg:px-[4vw] lg:py-[3vw] flex flex-col gap-[5vw] lg:gap-[2vw] h-full w-full lg:w-5/12 bg-white
        ${modalFiltersActive ? 'translate-x-0' : 'translate-x-full'}
        transition-all duration-500 ease-out overflow-y-auto custom-scrollbar`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex items-center justify-between">
          <h2 className="text-[7vw] lg:text-[2.5vw] font-medium tracking-wide">Filters</h2>
          <button
            onClick={() => setModalFiltersActive(false)}
            className="w-[10vw] p-[2vw] lg:w-[3vw] lg:p-[0.2vw] lg:rounded-md overflow-hidden hover:bg-black/15 transition-colors duration-200 ease-out cursor-pointer">
            {SIDEBAR_MENU.icons.close}
          </button>
        </div>

        <div className="">
          {/* Brands Section */}
          <div className="w-full h-fit">
            {/* Title */}
            <div className="px-[2vw] py-[10vw] lg:px-[0.5vw] lg:py-[3vw] bg-white hover:bg-gray-100 cursor-pointer transition-colors ease-in-out border-y border-y-gray-200">
              <h3 className="text-[3.5vw] lg:text-[1vw] font-medium leading-none tracking-wide">{BRANDS.title}</h3>
            </div>
            {/* Brands */}
            <div className="max-h-[120vw] lg:max-h-[20vw] overflow-y-auto custom-scrollbar">
              <div className="flex flex-col pt-[8vw] lg:pt-[2vw]">
                {
                  BRANDS.brands.map((brand, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <label className="w-full flex items-center gap-[2vw] lg:gap-[0.5vw] px-[2vw] lg:px-[0.5vw] py-[3.5vw] lg:py-[0.9vw] cursor-pointer">
                        <input
                          type="checkbox"
                          className="accent-gray-800"
                        />
                        <p className="text-[3.3vw] lg:text-[1vw] select-none">{brand}</p>
                      </label>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          {/* Genders Section */}
          <div className="w-full h-fit">
            {/* Title */}
            <div className="px-[2vw] py-[10vw] lg:px-[0.5vw] lg:py-[3vw] bg-white hover:bg-gray-100 cursor-pointer transition-colors ease-in-out border-y border-y-gray-200">
              <h3 className="text-[3.5vw] lg:text-[1vw] font-medium leading-none tracking-wide">{GENDERS.title}</h3>
            </div>
            {/* Gender */}
            <div className="max-h-[120vw] lg:max-h-[20vw] overflow-y-auto custom-scrollbar">
              <div className="flex flex-col pt-[8vw] lg:pt-[2vw]">
                {
                  GENDERS.genders.map((gender, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <label className="w-full flex items-center gap-[2vw] lg:gap-[0.5vw] px-[2vw] lg:px-[0.5vw] py-[3.5vw] lg:py-[0.9vw] cursor-pointer">
                        <input
                          type="checkbox"
                          className="accent-gray-800"
                        />
                        <p className="text-[3.3vw] lg:text-[1vw] select-none">{gender}</p>
                      </label>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          {/* Classes Section */}
          <div className="w-full h-fit">
            {/* Title */}
            <div className="px-[2vw] py-[10vw] lg:px-[0.5vw] lg:py-[3vw] bg-white hover:bg-gray-100 cursor-pointer transition-colors ease-in-out border-y border-y-gray-200">
              <h3 className="text-[3.5vw] lg:text-[1vw] font-medium leading-none tracking-wide">{CLASSES.title}</h3>
            </div>
            {/* Class */}
            <div className="max-h-[120vw] lg:max-h-[20vw] overflow-y-auto custom-scrollbar">
              <div className="flex flex-col pt-[8vw] lg:pt-[2vw]">
                {
                  CLASSES.classes.map((item, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <label className="w-full flex items-center gap-[2vw] lg:gap-[0.5vw] px-[2vw] lg:px-[0.5vw] py-[3.5vw] lg:py-[0.9vw] cursor-pointer">
                        <input
                          type="checkbox"
                          className="accent-gray-800"
                        />
                        <p className="text-[3.3vw] lg:text-[1vw] select-none">{item}</p>
                      </label>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          {/* Fragnance Notes Section */}
          <div className="w-full h-fit">
            {/* Title */}
            <div className="px-[2vw] py-[10vw] lg:px-[0.5vw] lg:py-[3vw] bg-white hover:bg-gray-100 cursor-pointer transition-colors ease-in-out border-y border-y-gray-200">
              <h3 className="text-[3.5vw] lg:text-[1vw] font-medium leading-none tracking-wide">{NOTES.title}</h3>
            </div>
            {/* Notes */}
            <div className="max-h-[120vw] lg:max-h-[20vw] overflow-y-auto custom-scrollbar">
              <div className="flex flex-col pt-[8vw] lg:pt-[2vw]">
                {
                  NOTES.notes.map((note, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <label className="w-full flex items-center gap-[2vw] lg:gap-[0.5vw] px-[2vw] lg:px-[0.5vw] py-[3.5vw] lg:py-[0.9vw] cursor-pointer">
                        <input
                          type="checkbox"
                          className="accent-gray-800"
                        />
                        <p className="text-[3.3vw] lg:text-[1vw] select-none">{note}</p>
                      </label>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          {/* Fragnance Families Section */}
          <div className="w-full h-fit">
            {/* Title */}
            <div className="px-[2vw] py-[10vw] lg:px-[0.5vw] lg:py-[3vw] bg-white hover:bg-gray-100 cursor-pointer transition-colors ease-in-out border-y border-y-gray-200">
              <h3 className="text-[3.5vw] lg:text-[1vw] font-medium leading-none tracking-wide">{FAMILIES.title}</h3>
            </div>
            {/* Families */}
            <div className="max-h-[120vw] lg:max-h-[20vw] overflow-y-auto custom-scrollbar">
              <div className="flex flex-col pt-[8vw] lg:pt-[2vw]">
                {
                  FAMILIES.families.map((family, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <label className="w-full flex items-center gap-[2vw] lg:gap-[0.5vw] px-[2vw] lg:px-[0.5vw] py-[3.5vw] lg:py-[0.9vw] cursor-pointer">
                        <input
                          type="checkbox"
                          className="accent-gray-800"
                        />
                        <p className="text-[3.3vw] lg:text-[1vw] select-none">{family}</p>
                      </label>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          {/* Styles Section */}
          <div className="w-full h-fit">
            {/* Title */}
            <div className="px-[2vw] py-[10vw] lg:px-[0.5vw] lg:py-[3vw] bg-white hover:bg-gray-100 cursor-pointer transition-colors ease-in-out border-y border-y-gray-200">
              <h3 className="text-[3.5vw] lg:text-[1vw] font-medium leading-none tracking-wide">{STYLES.title}</h3>
            </div>
            {/* Styles */}
            <div className="max-h-[120vw] lg:max-h-[20vw] overflow-y-auto custom-scrollbar">
              <div className="flex flex-col pt-[8vw] lg:pt-[2vw]">
                {
                  STYLES.styles.map((style, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <label className="w-full flex items-center gap-[2vw] lg:gap-[0.5vw] px-[2vw] lg:px-[0.5vw] py-[3.5vw] lg:py-[0.9vw] cursor-pointer">
                        <input
                          type="checkbox"
                          className="accent-gray-800"
                        />
                        <p className="text-[3.3vw] lg:text-[1vw] select-none">{style}</p>
                      </label>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default FiltersModal