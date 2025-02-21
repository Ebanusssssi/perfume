import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";
import { SINGLE_PRODUCT_CONTENT } from "../assets/constants";

const Product = () => {
  const { productId } = useParams();
  const { PRODUCTS } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const fetchProductData = async () => {
    PRODUCTS.map((item)=>{
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, PRODUCTS])
  
  // bg-[linear-gradient(0deg,_rgba(255,255,255,1)_29%,_rgba(255,255,255,0)_100%)]]
  return (
    <div className="w-full h-fit">
      {
        productData 
        ? <div className="w-full h-fit flex flex-col lg:flex-row">
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
                    <img src={productData.star[0]} alt="" className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="w-[5.1vw] h-[5.1vw] lg:w-[1.4vw] lg:h-[1.4vw] overflow-hidden">
                    <img src={productData.star[0]} alt="" className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="w-[5.1vw] h-[5.1vw] lg:w-[1.4vw] lg:h-[1.4vw] overflow-hidden">
                    <img src={productData.star[0]} alt="" className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="w-[5.1vw] h-[5.1vw] lg:w-[1.4vw] lg:h-[1.4vw] overflow-hidden">
                    <img src={productData.star[0]} alt="" className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="w-[5.1vw] h-[5.1vw] lg:w-[1.4vw] lg:h-[1.4vw] overflow-hidden">
                    <img src={productData.star[0]} alt="" className="w-full h-full object-cover object-center opacity-30" />
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
                <div className={`${showDescription ? 'h-fit' : 'h-[45vw] lg:h-[12vw]'} w-full overflow-hidden relative`}>
                  <h4 className="text-[4vw] lg:text-[1.1vw] tracking-wide font-medium text-black mb-[1vw] lg:mb-[0.5vw]">Product description</h4>
                  <p className="text-[3.9vw] lg:text-[1vw] tracking-wide font-medium leading-relaxed text-gray-600">{productData.description}</p>
                  <p className="mt-[2vw] lg:mt-[1vw] text-[3vw] lg:text-[0.76vw] tracking-wide lg:leading-relaxed text-gray-500">
                    Read the {productData.title} reviews from our customers to learn more about the fragrance. Experience {productData.title} for a whole month by adding it to your perfume calendar.
                  </p>
                  {
                    !showDescription &&
                    <div className="absolute left-0 right-0 bottom-0 z-30 h-[15vw] lg:h-[4vw] bg-gradient-to-t from-white via-white to-transparent flex items-end">
                      <button onClick={() => setShowDescription(true)} className="text-[3.9vw] lg:text-[1vw] font-medium tracking-wide">Read more</button>
                    </div>
                  }
                </div>

                {/* Gradient Indicators */}
                <div className="">
                   {/* Trail */}
                   <div className="w-full flex flex-col items-start justify-between gap-[1.5vw] lg:gap-[0.5vw] py-[3.6vw] lg:py-[0.8vw] mt-[5vw] lg:mt-[2vw] border-t border-t-black/10 overflow-visible">
                    {/* Title */}
                    <div className="flex">
                      <h4 className="font-medium text-[3.5vw] lg:text-[0.92vw] whitespace-nowrap tracking-wide lg:tracking-normal">Trail of trace</h4>
                    </div>
                    {/* Indicator */}
                    <div className="h-[7vw] lg:h-[2.1vw] w-full bg-black/80 relative overflow-hidden">
                      <div className={`absolute left-[${productData.trail}%] top-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,_rgba(0,0,0,0)_0%,_rgba(255,255,255,1)_20%,_rgba(255,255,255,1)_100%)] h-[110%] w-[100%]`}></div>
                    </div>
                    {/* Light - Strong */}
                    <div className="w-full flex items-center justify-between">
                      <span className="text-[3.3vw] lg:text-[0.8vw] text-gray-600">Light</span>
                      <span className="text-[3.3vw] lg:text-[0.8vw] text-gray-600">Strong</span>
                    </div>
                  </div>
                  {/* Presence */}
                  <div className="w-full flex flex-col items-start justify-between gap-[1.5vw] lg:gap-[0.5vw] py-[3.6vw] lg:py-[0.8vw] border-t border-t-black/10">
                    {/* Title */}
                    <div className="flex">
                      <h4 className="font-medium text-[3.5vw] lg:text-[0.92vw] whitespace-nowrap tracking-wide lg:tracking-normal">Presence in hours</h4>
                    </div>
                    {/* Indicator */}
                    <div className="h-[7vw] lg:h-[2.1vw] w-full bg-black/80 relative overflow-hidden">
                      <div className={`absolute left-[${productData.presence}%] top-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,_rgba(0,0,0,0)_0%,_rgba(255,255,255,1)_20%,_rgba(255,255,255,1)_100%)] h-[110%] w-[100%]`}></div>
                    </div>
                    {/* 4 hour - 12 hours */}
                    <div className="w-full flex items-center justify-between">
                      <span className="text-[3.3vw] lg:text-[0.8vw] text-gray-600">4 Hours</span>
                      <span className="text-[3.3vw] lg:text-[0.8vw] text-gray-600">12 Hours</span>
                    </div>
                  </div>
                </div>

                {/* Other Details */}
                <div className="w-full">
                  {/* Gender */}
                  <div className="flex items-center justify-between py-[6vw] px-[3vw] lg:py-[1.5vw] lg:px-[0.8vw] border-t border-t-black/10">
                    <h4 className="font-medium text-[3.5vw] lg:text-[0.92vw]">Gender</h4>
                    <span className="text-[3.3vw] lg:text-[0.92vw] text-gray-600">{productData.gender}</span>
                  </div>
                  {/* Class */}
                  <div className="flex items-center justify-between py-[6vw] px-[3vw] lg:py-[1.5vw] lg:px-[0.8vw] border-t border-t-black/10">
                    <h4 className="font-medium text-[3.5vw] lg:text-[0.92vw]">Class</h4>
                    <span className="text-[3.3vw] lg:text-[0.92vw] text-gray-600">{productData.class}</span>
                  </div>
                  {/* Fragnance Notes */}
                  <div className="flex flex-col items-start gap-[1.5vw] lg:gap-[0.5vw] py-[3vw] lg:py-[0.75vw] border-t border-t-black/10">
                    <div onClick={() => setShowNotes(prev => !prev)} className="w-full flex items-center justify-between px-[3vw] py-[1.5vw] lg:px-[0.8vw] lg:py-[0.75vw] cursor-pointer hover:bg-gray-100">
                      <h4 className="font-medium text-[3.5vw] lg:text-[0.92vw] whitespace-nowrap">Fragnance notes</h4>
                      <div className={`${showNotes ? "-rotate-180" : "rotate-0"} transition-all ease-in-out`}>{SINGLE_PRODUCT_CONTENT.icons.chevron}</div>
                    </div>
                    <ul className={`${showNotes ? "flex opacity-100" : "hidden opacity-0"} flex flex-col items-start gap-[1.5vw] lg:gap-[0.5vw] px-[3vw] pb-[1.5vw] lg:px-[0.8vw] lg:pb-[0.75vw] transition-all ease-in-out`}>
                      {
                        productData.notes.map((note, index) => (
                          <li key={index} className="text-[3.3vw] text-gray-600">{note}</li>
                        ))
                      }
                    </ul>
                  </div>
                  {/* Fragnance Family */}
                  <div className="flex items-center justify-between py-[6vw] px-[3vw] lg:py-[1.5vw] lg:px-[0.8vw] border-t border-t-black/10">
                    <h4 className="font-medium text-[3.5vw] lg:text-[0.92vw] whitespace-nowrap">Fragnance Family</h4>
                    <span className="text-[3.3vw] lg:text-[0.92vw] text-gray-600">{productData.family}</span>
                  </div>
                  {/* Type */}
                  <div className="flex items-center justify-between py-[6vw] px-[3vw] lg:py-[1.5vw] lg:px-[0.8vw] border-t border-t-black/10">
                    <h4 className="font-medium text-[3.5vw] lg:text-[0.92vw]">Type</h4>
                    <span className="text-[3.3vw] lg:text-[0.92vw] text-gray-600">{productData.category}</span>
                  </div>
                  {/* Style */}
                  <div className="flex items-center justify-between py-[6vw] px-[3vw] lg:py-[1.5vw] lg:px-[0.8vw] border-y border-y-black/10">
                    <h4 className="font-medium text-[3.5vw] lg:text-[0.92vw]">Style</h4>
                    <span className="text-[3.3vw] lg:text-[0.92vw] text-gray-600">{productData.style}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        : <div className="w-full h-screen bg-gray-200 rounded-[2vw] flex items-center justify-center my-[2vw] opacity-35 animate-pulse">
            <p className="font-semibold text-[3vw]">404 NOT FOUND :(</p>
          </div>
      }
    </div>
  )
}

export default Product