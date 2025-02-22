import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import { RELATED_PRODUCT } from "../assets/constants";

const RelatedProducts = ({ productData }) => {
    const { PRODUCTS } = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(() => {
      setRelatedProducts(PRODUCTS.filter(product => product.family === productData.family))
    }, [PRODUCTS, productData])
    

  return (
    <section className='w-full h-fit pt-[18vw] lg:pt-[5vw]'>
      <div className="px-[4.7vw] mb-[15vw] lg:mb-[2.5vw]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[5vw] mb-[12vw] lg:mb-[4vw]">
          <h2 className="w-[90%] lg:w-full text-[5vw] lg:text-[2vw] font-medium tracking-wide lg:leading-none">{RELATED_PRODUCT.title}</h2>
          <Link to="/products" className="hidden lg:block text-[3.8vw] lg:text-[1vw] whitespace-nowrap text-black/70 hover:text-black tracking-wide leading-none uppercase transition-colors ease-in-out">{RELATED_PRODUCT.exploreButton}</Link>
        </div>
        <div className="w-full">
          <div className="grid w-full h-fit grid-cols-2 lg:grid-cols-5 gap-[4.5vw] lg:gap-[2vw]">
            {
              relatedProducts.slice(0,5).map((product, index) => (
                <ProductItem key={index} id={product._id} image={product.image[0]} title={product.title} brand={product.brand}/>
              ))
            }
          </div>
        </div>
        <Link 
          to="/products" 
          className="block lg:hidden mt-[12vw] px-[15vw] py-[5vw] lg:px-[2.4vw] lg:py-[1.2vw] text-[3.8vw] lg:text-[1vw] whitespace-nowrap text-center
          tracking-wide text-white bg-black border border-black hover:border-slate-200 rounded-full
          hover:text-black hover:bg-white hover:scale-105 transition-all duration-300 ease-in-outcursor-pointer"
        >
          {RELATED_PRODUCT.exploreButton}
        </Link>
      </div>
      <div className="h-[160vw] lg:h-[120vh] w-full flex items-center justify-center relative overflow-hidden">
        <div className="text-center text-white">
          <p className="text-[4vw] font-medium leading-none drop-shadow-lg mb-[1vw]">{RELATED_PRODUCT.bannerTitle}</p>
          <p className="text-[14vw] font-medium leading-none drop-shadow-lg">{productData.family}</p>
        </div>
        <img src={productData.familyBanner} alt="" className="absolute h-full w-full -z-10 top-0 object-cover object-center" />
      </div>
    </section>
  )
}

export default RelatedProducts