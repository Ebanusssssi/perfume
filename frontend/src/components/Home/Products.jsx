import { useState } from "react"
import { HOME_PRODUCTS } from "../../assets/constants"
import { NavLink } from "react-router-dom";

const Products = () => {

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activateTab = (index) => {
    setActiveTabIndex(index);
  }

  return (
    <section className="h-fit w-full pt-[10vw] pb-[5vw] lg:pt-[5vw] lg:pb-[2.5vw] px-[4vw] bg-blue-500/0">
      <div className="h-fit w-full flex flex-col gap-[11vw] lg:gap-[4vw]">

        {/* Section Header -> Title + Tabs */}
        <div className="flex flex-col lg:flex-row gap-[7vw] lg:gap-0 items-center justify-between font-medium">
          <h2 className="text-[9vw] lg:text-[2.5vw] leading-none">{HOME_PRODUCTS.sectionTitle}</h2>
          <ul className="flex items-center gap-[15vw] lg:gap-[1.3vw]">
            {
              HOME_PRODUCTS.tabsLabels.map((label, index) => (
                <li
                  onClick={() => activateTab(index)}
                  key={index} 
                  className="flex items-start gap-[0.5vw] lg:gap-[0.45vw] cursor-pointer group"
                >
                  <p className={`${index === activeTabIndex ? "border-b-black" : "border-b-transparent"} uppercase text-[4vw] leading-none lg:leading-normal lg:text-[1vw] border-b-2 hover:border-b-black transition-all ease-in-out`}>{label}</p>
                  {/* <div className="size-[1.1vw] relative z-50 group">
                    {HOME_PRODUCTS.icons.info}
                    <div className="absolute top-full left-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 bg-red-500 w-52 h-40"></div>
                  </div> */}
                </li>
              ))
            }
          </ul>
        </div>

        {/* Product List Tabs */}

        {/* 1 */}
        <div className={`${activeTabIndex === 0 ? "grid" : "hidden"} w-full h-fit grid-cols-2 lg:grid-cols-5 gap-[4.5vw] lg:gap-[2.2vw]`}>
          {
            HOME_PRODUCTS.productCards.map((card, index) => (
              <NavLink to="/product/:productId" key={index} className="w-full h-full py-[5vw] lg:py-[3vw] bg-[#F6F5F1] rounded-[0.2vw] relative group">
                {/* Add to Calendar Button */}
                <button className="w-[8.5vw] lg:w-14 h-[8.5vw] lg:h-14 justify-center items-center bg-white rounded-full text-[4.5vw] lg:text-[1.5vw] text-gray-800 leading-none lg:hidden flex lg:group-hover:flex absolute right-[1.5vw] lg:right-[1vw] top-[1.5vw] lg:top-[1vw]">
                  +
                </button>
                {/* Products Card Content */}
                <div className="w-full h-full flex flex-col items-center justify-center truncate">
                  <img src={card.image} alt="" className="w-[40vw] lg:w-[14vw] h-auto" />
                  <h3 className="max-w-[80%] lg:max-w-[90%] text-[3.5vw] lg:text-[0.95vw] font-medium truncate">{card.title}</h3>
                  <p className="max-w-[80%] lg:max-w-[90%] text-[3.2vw] lg:text-[0.8vw] font-normal truncate">{card.brand}</p>
                  <ul className="flex items-center mt-[0.6vw] lg:mt-[0.2vw] opacity-20">
                    <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
                    <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
                    <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
                    <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
                    <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
                  </ul>
                </div>
              </NavLink>
            ))
          }
        </div>

        {/* 2 */}
        <div className={`${activeTabIndex === 1 ? "grid" : "hidden"} w-full h-[340vw] lg:h-[45vw] grid-cols-2 lg:grid-cols-5 gap-[4.5vw] lg:gap-[2.2vw]`}>
        {
          HOME_PRODUCTS.productCards2.map((card, index) => (
            <NavLink to="/product/:productId" key={index} className="w-full h-full py-[5vw] lg:py-[3vw] bg-[#F6F5F1] rounded-[0.2vw] relative group">
              {/* Add to Calendar Button */}
              <button className="w-[8.5vw] lg:w-14 h-[8.5vw] lg:h-14 justify-center items-center bg-white rounded-full text-[4.5vw] lg:text-[1.5vw] text-gray-800 leading-none lg:hidden flex lg:group-hover:flex absolute right-[1.5vw] lg:right-[1vw] top-[1.5vw] lg:top-[1vw]">
                +
              </button>
              {/* Products Card Content */}
              <div className="w-full h-full flex flex-col items-center justify-center truncate">
                <img src={card.image} alt="" className="w-[40vw] lg:w-[14vw] h-auto" />
                <h3 className="max-w-[80%] lg:max-w-[90%] text-[3.5vw] lg:text-[0.95vw] font-medium truncate">{card.title}</h3>
                <p className="max-w-[80%] lg:max-w-[90%] text-[3.2vw] lg:text-[0.8vw] font-normal truncate">{card.brand}</p>
                <ul className="flex items-center mt-[0.6vw] lg:mt-[0.2vw] opacity-20">
                  <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
                  <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
                  <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
                  <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
                  <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
                </ul>
              </div>
            </NavLink>
          ))
        }
        </div>

        {/* 3 */}
        <div className={`${activeTabIndex === 2 ? "grid" : "hidden"} w-full h-[340vw] lg:h-[45vw] grid-cols-2 lg:grid-cols-5 gap-[4.5vw] lg:gap-[2.2vw]`}>
        {
          HOME_PRODUCTS.productCards3.map((card, index) => (
            <NavLink to="/product/:productId" key={index} className="w-full h-full py-[5vw] lg:py-[3vw] bg-[#F6F5F1] rounded-[0.2vw] relative group">
              {/* Add to Calendar Button */}
              <button className="w-[8.5vw] lg:w-14 h-[8.5vw] lg:h-14 justify-center items-center bg-white rounded-full text-[4.5vw] lg:text-[1.5vw] text-gray-800 leading-none lg:hidden flex lg:group-hover:flex absolute right-[1.5vw] lg:right-[1vw] top-[1.5vw] lg:top-[1vw]">
                +
              </button>
              {/* Products Card Content */}
              <div className="w-full h-full flex flex-col items-center justify-center truncate">
                <img src={card.image} alt="" className="w-[40vw] lg:w-[14vw] h-auto" />
                <h3 className="max-w-[80%] lg:max-w-[90%] text-[3.5vw] lg:text-[0.95vw] font-medium truncate">{card.title}</h3>
                <p className="max-w-[80%] lg:max-w-[90%] text-[3.2vw] lg:text-[0.8vw] font-normal truncate">{card.brand}</p>
                <ul className="flex items-center mt-[0.6vw] lg:mt-[0.2vw] opacity-20">
                  <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
                  <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
                  <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
                  <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
                  <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
                </ul>
              </div>
            </NavLink>
          ))
        }
        </div>

      </div>
    </section>
  )
}

export default Products