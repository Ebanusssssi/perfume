import { useContext, useEffect, useState } from "react"
import { HOME_PRODUCTS } from "../../assets/constants"
import { ShopContext } from "../../context/ShopContext";
import ProductItem from "../ProductItem";

const Products = () => {

  const { PRODUCTS } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([])

  const [activeTabIndex, setActiveTabIndex] = useState(0);


  useEffect(() => {
    setLatestProducts(PRODUCTS.slice(0,10));
  }, [])
  
  
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
                </li>
              ))
            }
          </ul>
        </div>

        {/* Product List Tabs */}

        {/* 1 */}
        <div className={`${activeTabIndex === 0 ? "grid" : "hidden"} w-full h-fit grid-cols-2 lg:grid-cols-5 gap-[4.5vw] lg:gap-[2.2vw]`}>
          {
            latestProducts.map((product, index) => (
              <ProductItem key={index} id={product._id} image={product.image} title={product.title} brand={product.brand} />
            ))
          }
        </div>

        {/* 2 */}
        <div className={`${activeTabIndex === 1 ? "grid" : "hidden"} w-full h-[340vw] lg:h-[45vw] grid-cols-2 lg:grid-cols-5 gap-[4.5vw] lg:gap-[2.2vw]`}>
          {
            latestProducts.slice(0,6).map((product, index) => (
              <ProductItem key={index} id={product._id} image={product.image} title={product.title} brand={product.brand} />
            ))
          }
        </div>

        {/* 3 */}
        <div className={`${activeTabIndex === 2 ? "grid" : "hidden"} w-full h-[340vw] lg:h-[45vw] grid-cols-2 lg:grid-cols-5 gap-[4.5vw] lg:gap-[2.2vw]`}>
          {
            latestProducts.slice(0,8).map((product, index) => (
              <ProductItem key={index} id={product._id} image={product.image} title={product.title} brand={product.brand} />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Products