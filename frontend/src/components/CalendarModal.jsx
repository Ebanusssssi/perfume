import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { PRODUCT_CARD } from "../assets/constants";
import { getNext24Month } from "../utils/utils";


const CalendarModal = () => {
  // Dynamic list of next 24 month + year
  const [months, setMonths] = useState([]);
  // Sidebar products
  const [sidebarProducts, setSidebarProducts] = useState([]);
  // Context variables
  const { PRODUCTS, modalCalendarActive, setModalCalendarActive, calendarItems, addToCalendar, removeFromCalendar, isCalendarFull, setIsCalendarFull } = useContext(ShopContext);
  


  // Getting 5 products for sidebar
  useEffect(() => {
    setSidebarProducts(PRODUCTS.slice(15, 20))
  }, [PRODUCTS])

  // Getting next 24 months
  useEffect(() => {
    setMonths(getNext24Month())
  }, [])

  // For Debugging
  // useEffect(() => {
  //   console.log(calendarItems);
  // }, [calendarItems])
  

  return (
    // Dark Overlay Whole Screen
    <div
      className={`max-h-screen w-full fixed inset-0 z-50 flex justify-end bg-black/40
      ${modalCalendarActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      transition-all duration-300 ease-out`}
      onClick={() => setModalCalendarActive(false)}
    > 
      {/* Search Modal Content */}
      <div 
        className={`flex h-full w-full lg:w-[70%] bg-white
        ${modalCalendarActive ? 'translate-x-0' : 'translate-x-full'}
        transition-all duration-500 ease-out`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar With Products */}
        <div className="hidden lg:block w-1/3 h-full overflow-y-auto custom-scrollbar">
          <div className="grid grid-rows-5 grid-cols-1">
            {
              sidebarProducts.map((product, index) => (
                <div key={index} className="relative">
                  <Link 
                    onClick={() => setModalCalendarActive(false)}
                    to={`/product/${product._id}`} 
                    className="w-full h-full flex flex-col items-center py-[2vw] bg-[#F6F5F1] "
                  >
                    <div className="w-[10vw]">
                      <img src={product.image} alt="Product image" className="h-full w-full object-cover object-center" />
                    </div>
                    <h3 className="max-w-[80%] lg:max-w-[90%] text-[3.5vw] lg:text-[0.95vw] font-medium truncate">{product.title}</h3>
                    <p className="max-w-[80%] lg:max-w-[90%] text-[3.2vw] lg:text-[0.8vw] font-normal truncate">{product.brand}</p>
                  </Link>
                  <button 
                    onClick={() => addToCalendar(product)} 
                    className="size-[8.5vw] lg:size-[3vw] justify-center items-center border border-transparent bg-white hover:border-gray-200 transition-all duration-200 ease-in-out rounded-full text-[4.5vw] lg:text-[1.5vw] text-gray-800 leading-none flex absolute right-[1.5vw] lg:right-[1vw] top-[1vw] lg:top-[1vw]">
                    <div className="size-[3.7vw] lg:size-[1.5vw]">{PRODUCT_CARD.icons.add}</div>
                  </button>
                </div>
              ))
            }
          </div>
        </div>

        {/* Calendar */}
        <div className="flex flex-col h-full w-full">
          {/* Top */}
          <header className="flex-[0_1_0%] w-full px-[8.5vw] lg:px-[4.5vw] py-[7vw] lg:py-[2vw] bg-white">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-[5vw] lg:text-[1.8vw] font-medium tracking-wide">Perfume calendar</h2>
              <div
                onClick={() => setModalCalendarActive(false)}
                className="size-[8vw] lg:size-[3vw] flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors ease-in-out rounded-lg cursor-pointer"
              >
                <p className="rotate-45 size-[6vw] lg:size-[1vw]">{PRODUCT_CARD.icons.add}</p>
              </div>
            </div>
          </header>
          
          {/* Content */}
          <main className="flex-1 px-[8.5vw] lg:px-[4.5vw] py-[7vw] lg:py-[1.8vw] overflow-y-auto custom-scrollbar">
            {isCalendarFull 
              ? 
                <div onClick={() => setIsCalendarFull(false)} className="font-medium leading-none p-[3vw] lg:p-[1vw] mb-[3vw] lg:mb-[1vw] rounded-lg bg-red-100 lg:bg-transparent lg:hover:bg-red-100 cursor-pointer transition-colors ease-in-out">
                  <p className="text-red-400 text-[3vw] lg:text-[0.9vw]">
                    Calendar is full.
                  </p>
                  <span className="text-gray-400 text-[2.1vw] lg:text-[0.7vw]">Please, remove any item in any month you like and add another</span>
                </div>
              : null
            }
            <div className="w-full h-fit grid grid-cols-2 lg:grid-cols-4 gap-2">
              {
                calendarItems && calendarItems.map((product, index) => (
                  <div key={index} className="min-h-[55vw] lg:min-h-[15vw] flex items-center justify-center border-[1.5vw] lg:border-[0.35vw] border-gray-100 relative">
                    { !product 
                      ? (
                          <>
                            <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[2.2vw] lg:text-[0.5vw] text-black/25 font-bold tracking-wide">{months[index]}</p>
                            <Link 
                              onClick={() => setModalCalendarActive(false)} 
                              to="/products" 
                              className="text-[5vw] lg:text-[1vw] font-bold leading-none size-[15vw] lg:size-[3vw] rounded-full 
                              flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                            >
                              +
                            </Link>
                          </>
                        )
                      : (
                          <>
                            <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[2.2vw] lg:text-[0.5vw] text-black/25 font-bold tracking-wide">{months[index]}</p>
                            <Link
                              onClick={() => setModalCalendarActive(false)}
                              to={`/product/${product._id}`} 
                              className="w-full h-full flex flex-col items-center py-[2vw] bg-[#F6F5F1] "
                            >
                              <div className="w-[30vw] lg:w-[8vw] mt-[5vw] mb-[5vw] lg:mt-0 lg:mb-[1vw]">
                                <img src={product.image} alt="Product image" className="h-full w-full object-cover object-center" />
                              </div>
                              <h3 className="max-w-[80%] lg:max-w-[90%] text-[3vw] lg:text-[0.8vw] font-medium tracking-wide truncate leading-none lg:leading-normal mb-[1vw] lg:mb-0">{product.title}</h3>
                              <p className="max-w-[80%] lg:max-w-[90%] text-[2.5vw] lg:text-[0.7vw] font-normal tracking-wide truncate leading-none lg:leading-normal">{product.brand}</p>
                            </Link>
                            <button 
                              onClick={() => removeFromCalendar(product.uniqueId)} 
                              className="size-[8.5vw] lg:size-[2.2vw] flex justify-center items-center border border-transparent bg-white hover:border-gray-200 transition-all duration-200 ease-in-out rounded-full text-[4.5vw] lg:text-[1.5vw] text-gray-800 leading-none  absolute right-[1.5vw] lg:right-[0.5vw] top-[1vw] lg:top-[0.5vw]">
                              <div className="text-[7vw] lg:text-[1.5vw]">-</div>
                            </button>
                          </>
                        )
                    }
                  </div>
                ))
              }
            </div>
          </main>
          
          {/* Bottom */}
          <footer className="flex-[0_1_0%] w-full px-[8.5vw] lg:px-[1vw] py-[8vw] lg:py-[1.5vw] bg-white border-t border-b-slate-200">
            <div className="w-full flex flex-col items-center justify-center gap-[5vw] lg:gap-[2vw]">
              <p className="text-[5vw] lg:text-[1.4vw] tracking-wide font-medium">Not a member yet?</p>
              <Link
                to="/register"
                onClick={() => setModalCalendarActive(false)}
                className="font-semibold text-[3.8vw] lg:text-[1vw] tracking-wide border border-slate-200 px-[12vw] py-[5.5vw] lg:px-[3.5vw] lg:py-[1.5vw] rounded-full 
                bg-black hover:bg-white hover:text-black text-white hover:scale-105 transition-all duration-300 ease-in-out
                cursor-pointer"
              >
                  Start for $ 15,95 per month
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default CalendarModal

        // 24 Month
       {/* <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Mar 2025</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Apr 2025</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">May 2025</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Jun 2025</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Jul 2025</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Aug 2025</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Sept 2025</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Oct 2025</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Nov 2025</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Dec 2025</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Jan 2026</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Feb 2026</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Mar 2026</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Apr 2026</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">May 2026</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Jun 2026</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Jul 2026</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Aug 2026</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Sept 2026</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Oct 2026</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Nov 2026</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Dec 2026</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Jan 2027</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div>
              <div className="min-h-[15vw] flex items-center justify-center border-[0.35vw] border-gray-100 relative">
                <p className="absolute top-[0.1vw] left-1/2 -translate-x-1/2 text-[0.5vw] text-black/25 font-bold tracking-wide">Feb 2027</p>
                <Link 
                  onClick={() => setModalCalendarActive(false)} 
                  to="/products" 
                  className="text-[1vw] font-bold leading-none size-[3vw] rounded-full 
                  flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  +
                </Link>
              </div> */}