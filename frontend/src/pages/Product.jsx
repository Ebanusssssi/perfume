import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";
import Indicator from "../components/Product/Indicator";
import Detail from "../components/Product/Detail";
import DropdownDetail from "../components/Product/DropdownDetail";
import { PRODUCT_CONTENT } from "../assets/constants";
import ProductDescription from "../components/Product/ProductDescription";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { PRODUCTS } = useContext(ShopContext);
  const [productData, setProductData] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProductData = async () => {
    PRODUCTS.map((item)=>{
      if (item._id === productId) {
        setProductData(item);
        setLoading(false)
        setImage(item.image[0])
        
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, PRODUCTS])
  
  return !loading ? (

    <section className="w-full h-fit">
      <div className="w-full h-fit flex flex-col lg:flex-row">
        {/* Perfume Image */}
        <div className="w-full lg:w-1/2 h-[130vw] lg:h-screen bg-[#F6F5F1] lg:sticky lg:top-0 pt-[15vw] lg:pt-0">
          <div className="h-full flex flex-col items-center justify-center gap-[3vw] lg:gap-[5vw]">
            <div className="w-[74%] lg:w-[55%] h-auto overflow-hidden">
              <img src={image} alt="" className="w-full h-full object-cover object-center" />
            </div>
            <div className="w-[70vw] h-[10vw] lg:w-[23vw] lg:h-[2.7vw] opacity-15 bg-[radial-gradient(50%_50%_at_50%_50%,_rgb(0,_0,_0)_0%,_rgba(255,_255,_255,_0)_100%)]"></div>
          </div>
        </div>
        {/* Perfume Information */}
        <div className="w-full lg:w-1/2 h-fit flex flex-col items-center gap-[4.5vw] lg:gap-[1vw] pt-[7vw] pb-0 px-[4.7vw] lg:pt-[10vw] lg:pb-[5vw] lg:px-[12vw] bg-white">
          {/* Title & Brand */}
          <div className="text-center">
            <h2 className="font-semibold text-[5vw] lg:text-[1.3vw]">{productData.title}</h2>
            <p className="font-medium text-[4vw] lg:text-[1vw] text-gray-600 tracking-wide">{productData.brand}</p>
          </div>
          {/* Rating & Reviews */}
          <div className="flex flex-col items-center gap-[2vw] lg:gap-[0.6vw]">
            <div className="w-full flex justify-center items-center gap-[1.2vw] lg:gap-[0.4vw]">
              <div className="w-[5.1vw] h-[5.1vw] lg:w-[1.4vw] lg:h-[1.4vw] overflow-hidden">
                <img src={PRODUCT_CONTENT.icons.star} alt="" className="w-full h-full object-cover object-center" />
              </div>
              <div className="w-[5.1vw] h-[5.1vw] lg:w-[1.4vw] lg:h-[1.4vw] overflow-hidden">
                <img src={PRODUCT_CONTENT.icons.star} alt="" className="w-full h-full object-cover object-center" />
              </div>
              <div className="w-[5.1vw] h-[5.1vw] lg:w-[1.4vw] lg:h-[1.4vw] overflow-hidden">
                <img src={PRODUCT_CONTENT.icons.star} alt="" className="w-full h-full object-cover object-center" />
              </div>
              <div className="w-[5.1vw] h-[5.1vw] lg:w-[1.4vw] lg:h-[1.4vw] overflow-hidden">
                <img src={PRODUCT_CONTENT.icons.star} alt="" className="w-full h-full object-cover object-center" />
              </div>
              <div className="w-[5.1vw] h-[5.1vw] lg:w-[1.4vw] lg:h-[1.4vw] overflow-hidden">
                <img src={PRODUCT_CONTENT.icons.star} alt="" className="w-full h-full object-cover object-center opacity-30" />
              </div>
            </div>
            <p className="w-fit text-gray-600 text-[2.9vw] lg:text-[0.75vw] leading-none border-b border-b-gray-600">{productData.reviews} reviews</p>
          </div>
          {/* Class & Gender */}
          <p className="mt-[1.2vw] lg:mt-[0.5vw] text-[3vw] lg:text-[0.8vw] font-medium lg:font-normal">Eau de Parfum, Unisex</p>
          {/* Add To Calendar Button */}
          <button
            className="w-full font-normal lg:font-semibold text-[4vw] lg:text-[1vw] tracking-wide text-white bg-black border border-black hover:border-slate-200 
            px-[15vw] py-[5vw] my-[1vw] lg:px-[2.4vw] lg:py-[1.2vw] rounded-full 
            hover:text-black hover:bg-white hover:scale-110 transition-all duration-300 ease-in-out
            cursor-pointer"
          >
            Add to calendar
          </button>
          {/* All Details */}
          <div className="w-full h-fit bg-white rounded-[2.5vw] lg:rounded-[0.5vw]">
            {/* Description */}
            <div className="w-full">
              <ProductDescription 
                title={PRODUCT_CONTENT.titleDescr} 
                description={productData.description} 
                productTitle={productData.title} 
                more={PRODUCT_CONTENT.more} 
              />
            </div>
            {/* Gradient Indicators */}
            <div className="w-full">
              {/* Trail */}
              <Indicator 
                data={productData.trail - 10} 
                title={PRODUCT_CONTENT.indicators.presenceTitle} 
                range={PRODUCT_CONTENT.indicators.trailRange} />
              {/* Presence */}
              <Indicator 
                data={productData.presence - 10} 
                title={PRODUCT_CONTENT.indicators.presenceTitle} 
                range={PRODUCT_CONTENT.indicators.presenceRange} />
            </div>
            {/* Other Details */}
            <div className="w-full border-b border-b-black/10">
              {/* Gender */}
              <Detail title={PRODUCT_CONTENT.titleGender} value={productData.gender}/>
              {/* Class */}
              <Detail title={PRODUCT_CONTENT.titleClass} value={productData.class}/>
              {/* Fragnance Notes */}
              <DropdownDetail title={PRODUCT_CONTENT.titleNotes} data={productData.notes}/>
              {/* Fragnance Family */}
              <Detail title={PRODUCT_CONTENT.titleFamily} value={productData.family}/>
              {/* Type */}
              <Detail title={PRODUCT_CONTENT.titleType} value={productData.category}/>
              {/* Style */}
              <Detail title={PRODUCT_CONTENT.titleStyle} value={productData.style}/>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts productData={productData} />
    </section>

  ) : <div className="w-full h-screen rounded-[2vw] flex items-center justify-center opacity-50">
        <div className="size-14 rounded-full bg-gradient-to-r from-transparent to-gray-500 animate-spin"></div>
      </div>

}

export default Product  