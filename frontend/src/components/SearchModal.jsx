import { useEffect, useState } from "react";
import { SEARCH_MODAL } from "../assets/constants"

import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const SearchModal = () => {
  const { PRODUCTS, modalSearchActive, setModalSearchActive } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  // Setting Product List Depends on Chosen Option
  const applyOption = () => {
    let productsCopy = PRODUCTS.slice();

    if (searchValue.length > 0) {
      productsCopy = productsCopy.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.brand.toLowerCase().includes(searchValue.toLowerCase()));
    }
    setFilterProducts(productsCopy)
  }

  // Calling Apply Option Function When Option Changed
  useEffect(() => {
    applyOption();
  }, [searchValue])
  
  return (
    // Dark Overlay Whole Screen
    <div
      className={`max-h-screen w-full fixed inset-0 z-50 flex justify-end bg-black/40 
      ${modalSearchActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      transition-all duration-300 ease-out`}
      onClick={() => setModalSearchActive(false)}
    > 
      {/* Search Modal Content */}
      <div 
        className={`flex flex-col h-full w-full lg:w-1/3 bg-white
        ${modalSearchActive ? 'translate-x-0' : 'translate-x-full'}
        transition-all duration-500 ease-out`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top */}
        <header className="flex-[0_1_0%] w-full px-[5vw] lg:px-[1vw] py-[2vw] lg:py-[1.13vw] bg-white border-b border-b-slate-200 font-custom font-medium">
          <div className="flex items-center lg:border border-b-slate-200 lg:rounded-[0.3vw] lg:pl-[1.2vw] relative">
            {/* Desktop UI */}
            <div className="w-[1.5vw] hidden lg:flex justify-center items-center">{SEARCH_MODAL.icons.search}</div>
            {/* Mobile UI */}
            <button 
              className="w-[12vw] py-[0.7vw] px-[2.5vw] rounded-full flex lg:hidden justify-center items-center text-black hover:bg-black hover:text-white cursor-pointer transition-all"
              onClick={() => setModalSearchActive(false)}
            >
              {SEARCH_MODAL.icons.arrow}
            </button>

            <input
              autoFocus
              value={searchValue}
              onChange={(e)=>setSearchValue(e.target.value)}
              type="text" 
              placeholder={SEARCH_MODAL.placeholder} 
              className="w-full pl-[5vw] lg:pl-[0.7vw] py-[4vw] lg:py-[1vw] text-[3.5vw] lg:text-[1.1vw] lg:rounded-[0.3vw]
              outline-none" 
            />
            {/* Delete Search Prompt */}
            {
            searchValue.length > 0 ?
            <div 
              className="absolute right-[5vw] lg:right-[1vw] w-[8vw] lg:w-[1.5vw] cursor-pointer opacity-50 lg:opacity-65 hover:opacity-100 transition-all"
              onClick={() => setSearchValue('')}
            >
              {SEARCH_MODAL.icons.delete}
            </div> 
            : null
            }
          </div>
        </header>
        
        {/* Content */}
        <main className="flex-1 overflow-y-auto custom-scrollbar">
        {
          filterProducts.length > 0 
          ?
          <div className="flex flex-col items-start">
            {
              filterProducts.map((product, index) => (
                <Link
                  key={index}
                  onClick={() => setModalSearchActive(false)}
                  to={`/product/${product._id}`} 
                  className="w-full h-[22vw] lg:h-[6vw] flex items-center gap-[2vw] lg:gap-[0.5vw] lg:py-[0.5vw] px-[1.5vw] hover:bg-gray-100 border-b border-b-black/10"
                >
                  <div className="h-full w-[22vw] lg:w-[6vw] overflow-hidden p-[2vw] lg:p-[0.3vw]">
                    <img src={product.image[0]} alt="" className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="flex flex-col items-start gap-[0.3vw] lg:gap-[0.1vw] text-[4vw] lg:text-[1vw] font-medium">
                    <p className="text-black">{product.title}</p>
                    <p className="text-black/45">{product.brand}</p>
                  </div>
                </Link>
                // <ProductItem  key={index} id={product._id} image={product.image} title={product.title} brand={product.brand} />
              ))
            }
          </div>
          : <div className="w-full uppercase text-center font-medium text-[6vw] lg:text-[1.5vw] pt-[10vw] pb-[60vw] lg:pt-[5vw] lg:pb-[2vw] tracking-wider">no results</div>
        }
        </main>
        
        {/* Bottom */}
        <footer className="flex-[0_1_0%] w-full px-[5vw] lg:px-[1vw] py-[3vw] lg:py-[1.13vw] bg-white border-t border-b-slate-200 font-custom font-medium">
          <div className="w-full flex items-center justify-end">
            <button 
              className="font-semibold text-[3vw] lg:text-[1vw] tracking-wide text-black border border-slate-200 px-[6.2vw] py-[3.2vw] lg:px-[1.8vw] lg:py-[0.9vw] rounded-full 
              bg-transparent hover:bg-black hover:text-white hover:scale-110 transition-all duration-500 ease-in-out
              cursor-pointer"
              onClick={() => setModalSearchActive(false)}
            >
                {SEARCH_MODAL.closeModal}
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default SearchModal