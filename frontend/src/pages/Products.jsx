import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import { PRODUCTS_CONTENT } from "../assets/constants";

const Products = () => {
  const { PRODUCTS, setModalFiltersActive } = useContext(ShopContext);
  const [searchValue, setSearchValue] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [option, setOption] = useState(null);
  
  // Toggle Perfume Options (Filter)
  const toggleOption = (option) => {
    setOption(option);
  }

  // Setting Product List Depends on Chosen Option
  const applyOption = () => {
    let productsCopy = PRODUCTS.slice();
    if (option) {
      productsCopy = productsCopy.filter(item => item.category === option);
    }
    if (searchValue.length > 0) {
      productsCopy = productsCopy.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.brand.toLowerCase().includes(searchValue.toLowerCase()));
    }
    setFilterProducts(productsCopy)
  }

  // Calling Apply Option Function When Option Changed
  useEffect(() => {
    applyOption();
  }, [option, searchValue])

  
  return (
    <div className="w-full h-fit px-[4.7vw] pb-[4.5vw] pt-[28.5vw] lg:py-[3vw]">
      {/* Title */}
      <h2 className="w-full text-center text-[9vw] lg:text-[7.5vw] font-medium mb-[10vw] lg:mb-[3vw]">{PRODUCTS_CONTENT.title}</h2>

      {/* Search & Filters */}
      <div className="flex flex-wrap lg:flex-row items-center justify-between pb-[4.5vw] lg:pb-[1.5vw] lg:border-b border-b-slate-200">
        <div className="w-full lg:w-fit flex-1 justify-center order-2 lg:order-1 ">
          <div className="flex w-fit items-center place-self-center lg:place-self-start px-[8vw] py-[2.5vw] lg:px-[2vw] lg:py-[0.9vw] rounded-full border border-slate-200">
            <input 
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              type="text" 
              placeholder="EXPLORE" 
              className="max-w-[28vw] lg:w-[8vw] px-[0.7vw] text-[3.2vw] lg:text-[0.8vw] font-medium outline-none" 
            />
            {
              searchValue 
              ? <div onClick={() => setSearchValue("")} className="size-6 lg:size-[1.2vw] cursor-pointer">{PRODUCTS_CONTENT.icons.close}</div>
              : <div className="size-6 lg:size-[1.2vw]">{PRODUCTS_CONTENT.icons.search}</div>
              
            }
          </div>
        </div>

        {/* Search Options */}
        <div className="w-full lg:w-fit flex justify-center flex-col items-center gap-[8vw] lg:gap-[1vw] order-1 lg:order-2 mb-[10vw] lg:mb-0">
          <div className="flex items-center justify-between lg:justify-center gap-[9vw] lg:gap-[2vw]">
            {
              PRODUCTS_CONTENT.optionsLabels.map((option, index) => (
                <button
                  onClick={() => toggleOption(option)}
                  value={option}
                  key={index} 
                  className="flex items-start gap-[0.5vw] lg:gap-[0.45vw] cursor-pointer group"
                >
                  <p className="uppercase text-[3.5vw] leading-none lg:leading-normal lg:text-[1vw] font-medium border-b-2 border-b-transparent hover:border-b-black transition-all ease-in-out">{option}</p>
                </button>
              ))
            }
          </div>
          {/* Picked Option */}
         { 
          option &&
          <div 
            onClick={() => setOption(null)}
            className="flex items-end gap-[1.1vw] lg:gap-[0.3vw] text-white text-[2.5vw] lg:text-[0.7vw] lg:font-light uppercase leading-none bg-black px-[2.5vw] py-[1vw] lg:px-[0.8vw] lg:py-[0.3vw] rounded-full cursor-pointer"
          >
            <span className="">{option}</span>
            <div className="">{PRODUCTS_CONTENT.icons.close}</div>
          </div>
         }
        </div>

        {/* Filters Button */}
        <div onClick={() => setModalFiltersActive(true)} className="w-full lg:w-fit flex-1 flex justify-center lg:justify-end order-3">
          <button className="flex items-center gap-[1vw] lg:gap-[0.2vw] w-fit lg:px-[2vw] lg:py-[0.9vw] px-[8vw] py-[2.5vw] rounded-full border border-slate-200">
            <div className="size-6 lg:size-[1.2vw]">{PRODUCTS_CONTENT.icons.filter}</div>
            <span className="uppercase text-[3.2vw] lg:text-[1vw] lg:leading-none pt-[0.1vw]">Filters</span>
          </button>
        </div>
      </div>

      {/* Products */}
      {
        filterProducts.length > 0 
        ?
        <div className="grid w-full h-fit grid-cols-2 lg:grid-cols-5 gap-[4.5vw] lg:gap-[2.2vw] py-[4.5vw] lg:py-[2.5vw]">
          {
            filterProducts.map((product, index) => (
              <ProductItem key={index} id={product._id} image={product.image} title={product.title} brand={product.brand} />
            ))
          }
        </div>
        : <div className="w-full uppercase text-center font-medium text-[6vw] lg:text-[1.5vw] pt-[10vw] pb-[60vw] lg:pt-[5vw] lg:pb-[2vw] tracking-wider">no results</div>
      }
    </div>  
  )
}

export default Products