import { useContext, useState } from "react";
import { FILTERS, SIDEBAR_MENU } from "../assets/constants"
import { ShopContext } from "../context/ShopContext";

const FiltersModal = () => {

  const { 

    filterProducts,
    modalFiltersActive, setModalFiltersActive, 
    selectedBrands, setSelectedBrands, handleBrandChange, 
    selectedGender, setSelectedGender,  handleGenderChange,
    selectedType, setSelectedType, handleTypeChange,
    selectedNotes, setSelectedNotes, handleNotesChange,
    selectedFamilies, setSelectedFamilies, handleFamiliesChange,
    selectedStyles, setSelectedStyles, handleStylesChange,

  } = useContext(ShopContext);
  const [openFiltersOption, setOpenFiltersOption] = useState({});

  const handleFiltersClear = () => {
    setSelectedBrands([]);
    setSelectedGender([]);
    setSelectedType([]);
    setSelectedNotes([]);
    setSelectedFamilies([]);
    setSelectedStyles([]);
    setModalFiltersActive(false);
  }


  // Toggle Visibility of Filter Options
  const toggleFilterOption = (filterName) => {
    setOpenFiltersOption((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  }
  

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
        {/* Top */}
        <div className="w-full flex items-center justify-between">
          <h2 className="text-[7vw] lg:text-[2.5vw] font-medium tracking-wide">Filters</h2>
          <button
            onClick={() => setModalFiltersActive(false)}
            className="w-[10vw] p-[2vw] lg:w-[3vw] lg:p-[0.2vw] lg:rounded-md overflow-hidden hover:bg-black/15 transition-colors duration-200 ease-out cursor-pointer">
            {SIDEBAR_MENU.icons.close}
          </button>
        </div>
        
        {/* Filters */}
        <div className="">

          {/* Brand */}
          <div className="w-full h-fit">
            {/* Title */}
            <button onClick={() => toggleFilterOption("Brand")} className="text-left w-full px-[2vw] py-[10vw] lg:px-[0.5vw] lg:py-[3vw] bg-white hover:bg-gray-100 cursor-pointer transition-colors ease-in-out border-b border-b-gray-200">
              <h3 className="text-[3.5vw] lg:text-[1vw] font-medium leading-none tracking-wide">Brand</h3>
            </button>
            {/* Options */}
            {openFiltersOption["Brand"] && (
              <div className="max-h-[120vw] lg:max-h-[20vw] overflow-y-auto custom-scrollbar">
                <div className="flex flex-col pt-[8vw] lg:pt-[2vw]">
                  {
                    FILTERS[0].options.map((option, index) => (
                      <div key={index} className="flex flex-col items-start">
                        <label className="w-full flex items-center gap-[2vw] lg:gap-[0.5vw] px-[2vw] lg:px-[0.5vw] py-[3.5vw] lg:py-[0.9vw] cursor-pointer">
                          <input
                            onChange={() => handleBrandChange(option)}
                            checked={selectedBrands.includes(option)}
                            type="checkbox"
                            className="accent-gray-800"
                          />
                          <p className="text-[3.3vw] lg:text-[1vw] select-none">{option}</p>
                        </label>
                      </div>
                    ))
                  }
                </div>
              </div>
              )
            }
          </div>

          {/* Gender */}
          <div className="w-full h-fit">
            {/* Title */}
            <button onClick={() => toggleFilterOption("Gender")} className="text-left w-full px-[2vw] py-[10vw] lg:px-[0.5vw] lg:py-[3vw] bg-white hover:bg-gray-100 cursor-pointer transition-colors ease-in-out border-b border-b-gray-200">
              <h3 className="text-[3.5vw] lg:text-[1vw] font-medium leading-none tracking-wide">Gender</h3>
            </button>
            {/* Options */}
            {openFiltersOption["Gender"] && (
              <div className="max-h-[120vw] lg:max-h-[20vw] overflow-y-auto custom-scrollbar">
                <div className="flex flex-col pt-[8vw] lg:pt-[2vw]">
                  {
                    FILTERS[1].options.map((option, index) => (
                      <div key={index} className="flex flex-col items-start">
                        <label className="w-full flex items-center gap-[2vw] lg:gap-[0.5vw] px-[2vw] lg:px-[0.5vw] py-[3.5vw] lg:py-[0.9vw] cursor-pointer">
                          <input
                            onChange={() => handleGenderChange(option)}
                            checked={selectedGender.includes(option)}
                            type="checkbox"
                            className="accent-gray-800"
                          />
                          <p className="text-[3.3vw] lg:text-[1vw] select-none">{option}</p>
                        </label>
                      </div>
                    ))
                  }
                </div>
              </div>
              )
            }
          </div>

          {/* Class */}
          <div className="w-full h-fit">
            {/* Title */}
            <button onClick={() => toggleFilterOption("Class")} className="text-left w-full px-[2vw] py-[10vw] lg:px-[0.5vw] lg:py-[3vw] bg-white hover:bg-gray-100 cursor-pointer transition-colors ease-in-out border-b border-b-gray-200">
              <h3 className="text-[3.5vw] lg:text-[1vw] font-medium leading-none tracking-wide">Class</h3>
            </button>
            {/* Options */}
            {openFiltersOption["Class"] && (
              <div className="max-h-[120vw] lg:max-h-[20vw] overflow-y-auto custom-scrollbar">
                <div className="flex flex-col pt-[8vw] lg:pt-[2vw]">
                  {
                    FILTERS[2].options.map((option, index) => (
                      <div key={index} className="flex flex-col items-start">
                        <label className="w-full flex items-center gap-[2vw] lg:gap-[0.5vw] px-[2vw] lg:px-[0.5vw] py-[3.5vw] lg:py-[0.9vw] cursor-pointer">
                          <input
                            onChange={() => handleTypeChange(option)}
                            checked={selectedType.includes(option)}
                            type="checkbox"
                            className="accent-gray-800"
                          />
                          <p className="text-[3.3vw] lg:text-[1vw] select-none">{option}</p>
                        </label>
                      </div>
                    ))
                  }
                </div>
              </div>
              )
            }
          </div>

          {/* Notes */}
          <div className="w-full h-fit">
            {/* Title */}
            <button onClick={() => toggleFilterOption("Notes")} className="text-left w-full px-[2vw] py-[10vw] lg:px-[0.5vw] lg:py-[3vw] bg-white hover:bg-gray-100 cursor-pointer transition-colors ease-in-out border-b border-b-gray-200">
              <h3 className="text-[3.5vw] lg:text-[1vw] font-medium leading-none tracking-wide">Fragnance notes</h3>
            </button>
            {/* Options */}
            {openFiltersOption["Notes"] && (
              <div className="max-h-[120vw] lg:max-h-[20vw] overflow-y-auto custom-scrollbar">
                <div className="flex flex-col pt-[8vw] lg:pt-[2vw]">
                  {
                    FILTERS[3].options.map((option, index) => (
                      <div key={index} className="flex flex-col items-start">
                        <label className="w-full flex items-center gap-[2vw] lg:gap-[0.5vw] px-[2vw] lg:px-[0.5vw] py-[3.5vw] lg:py-[0.9vw] cursor-pointer">
                          <input
                            onChange={() => handleNotesChange(option)}
                            checked={selectedNotes.includes(option)}
                            type="checkbox"
                            className="accent-gray-800"
                          />
                          <p className="text-[3.3vw] lg:text-[1vw] select-none">{option}</p>
                        </label>
                      </div>
                    ))
                  }
                </div>
              </div>
              )
            }
          </div>

          {/* Family */}
          <div className="w-full h-fit">
            {/* Title */}
            <button onClick={() => toggleFilterOption("Family")} className="text-left w-full px-[2vw] py-[10vw] lg:px-[0.5vw] lg:py-[3vw] bg-white hover:bg-gray-100 cursor-pointer transition-colors ease-in-out border-b border-b-gray-200">
              <h3 className="text-[3.5vw] lg:text-[1vw] font-medium leading-none tracking-wide">Fragnance family</h3>
            </button>
            {/* Options */}
            {openFiltersOption["Family"] && (
              <div className="max-h-[120vw] lg:max-h-[20vw] overflow-y-auto custom-scrollbar">
                <div className="flex flex-col pt-[8vw] lg:pt-[2vw]">
                  {
                    FILTERS[4].options.map((option, index) => (
                      <div key={index} className="flex flex-col items-start">
                        <label className="w-full flex items-center gap-[2vw] lg:gap-[0.5vw] px-[2vw] lg:px-[0.5vw] py-[3.5vw] lg:py-[0.9vw] cursor-pointer">
                          <input
                            onChange={() => handleFamiliesChange(option)}
                            checked={selectedFamilies.includes(option)}
                            type="checkbox"
                            className="accent-gray-800"
                          />
                          <p className="text-[3.3vw] lg:text-[1vw] select-none">{option}</p>
                        </label>
                      </div>
                    ))
                  }
                </div>
              </div>
              )
            }
          </div>

          {/* Style */}
          <div className="w-full h-fit">
            {/* Title */}
            <button onClick={() => toggleFilterOption("Style")} className="text-left w-full px-[2vw] py-[10vw] lg:px-[0.5vw] lg:py-[3vw] bg-white hover:bg-gray-100 cursor-pointer transition-colors ease-in-out border-b border-b-gray-200">
              <h3 className="text-[3.5vw] lg:text-[1vw] font-medium leading-none tracking-wide">Style</h3>
            </button>
            {/* Options */}
            {openFiltersOption["Style"] && (
              <div className="max-h-[120vw] lg:max-h-[20vw] overflow-y-auto custom-scrollbar">
                <div className="flex flex-col pt-[8vw] lg:pt-[2vw]">
                  {
                    FILTERS[5].options.map((option, index) => (
                      <div key={index} className="flex flex-col items-start">
                        <label className="w-full flex items-center gap-[2vw] lg:gap-[0.5vw] px-[2vw] lg:px-[0.5vw] py-[3.5vw] lg:py-[0.9vw] cursor-pointer">
                          <input
                            onChange={() => handleStylesChange(option)}
                            checked={selectedStyles.includes(option)}
                            type="checkbox"
                            className="accent-gray-800"
                          />
                          <p className="text-[3.3vw] lg:text-[1vw] select-none">{option}</p>
                        </label>
                      </div>
                    ))
                  }
                </div>
              </div>
              )
            }
          </div>

        </div>

        {/* Bottom */}
        <div className="w-full flex flex-col items-center justify-center gap-[5vw] lg:gap-[1vw] mt-[6vw] lg:mt-[2vw]">
          <button
            onClick={() => setModalFiltersActive(false)}
            className="w-full lg:w-fit font-semibold text-[3.8vw] lg:text-[1vw] tracking-wide border border-slate-200 px-[12vw] py-[5.5vw] lg:px-[3vw] lg:py-[1.5vw] rounded-full 
            bg-black hover:bg-white hover:text-black text-white hover:scale-105 transition-all duration-300 ease-in-out
            cursor-pointer"
          >
            Show {filterProducts.length} results
          </button>

          <button
            onClick={() => handleFiltersClear()}
            className="w-full lg:w-fit text-[4vw] lg:text-[1.2vw] py-[3vw] lg:py-[0.2vw] tracking-wide font-medium border-b border-b-transparent hover:border-b-black transition-colors ease-in-out"
          >
            Clear filters
          </button>
        </div>

      </div>
    </div>
  )
}

export default FiltersModal







// {
//   FILTERS.map((filter, index) => (
//     <div key={index} className="w-full h-fit">

//       <button onClick={() => toggleFilterOption(filter.title)} className="text-left w-full px-[2vw] py-[10vw] lg:px-[0.5vw] lg:py-[3vw] bg-white hover:bg-gray-100 cursor-pointer transition-colors ease-in-out border-b border-b-gray-200">
//         <h3 className="text-[3.5vw] lg:text-[1vw] font-medium leading-none tracking-wide">{filter.title}</h3>
//       </button>

//       {openFiltersOption[filter.title] && (
//         <div className="max-h-[120vw] lg:max-h-[20vw] overflow-y-auto custom-scrollbar">
//           <div className="flex flex-col pt-[8vw] lg:pt-[2vw]">
//             {
//               filter.options.map((option, index) => (
//                 <div key={index} className="flex flex-col items-start">
//                   <label className="w-full flex items-center gap-[2vw] lg:gap-[0.5vw] px-[2vw] lg:px-[0.5vw] py-[3.5vw] lg:py-[0.9vw] cursor-pointer">
//                     <input
//                       type="checkbox"
//                       className="accent-gray-800"
//                     />
//                     <p className="text-[3.3vw] lg:text-[1vw] select-none">{option}</p>
//                   </label>
//                 </div>
//               ))
//             }
//           </div>
//         </div>
//         )
//       }
//     </div>
//   ))
// }