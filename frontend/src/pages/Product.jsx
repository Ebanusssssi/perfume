import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { PRODUCTS } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

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
        ? <div className="w-full h-fit flex flex-col lg:flex-row bg-blue-400">
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
            <div className="w-full lg:w-1/2 h-fit flex flex-col items-center gap-[4.5vw] lg:gap-[1vw] pt-[7vw] lg:pt-[10vw] pb-[5vw] px-[12vw] bg-white">
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

              {/* All Details */}
              <div className="w-full h-fit bg-white rounded-[2.5vw] lg:rounded-[0.5vw]">
                {/* Description */}
                <div className={`${showDescription ? 'h-fit' : 'h-[10vw]'} w-full overflow-hidden relative`}>
                  <h4 className="text-[1vw] tracking-wide font-medium text-black mb-[0.5vw]">Product description</h4>
                  <p className="text-[1vw] tracking-wide font-medium leading-relaxed text-gray-600">{productData.description}</p>
                  {
                    !showDescription &&
                    <div className="absolute left-0 right-0 bottom-0 z-30 h-[4vw] bg-gradient-to-t from-white via-white to-transparent flex items-end">
                      <button onClick={() => setShowDescription(true)} className="text-[1vw] font-medium tracking-wide">Read more</button>
                    </div>
                  }
                </div>
                {/* Other Details */}
                <div className="w-full">
                  {/* Gender */}
                  <div className="flex items-center justify-between mt-[2vw] py-[1.5vw] px-[0.8vw] border-t border-t-black/10">
                    <h4 className="font-medium text-[0.92vw]">Gender</h4>
                    <span className="text-[0.8vw] text-gray-600">{productData.gender}</span>
                  </div>
                  {/* Class */}
                  <div className="flex items-center justify-between py-[1.5vw] px-[0.8vw] border-t border-t-black/10">
                    <h4 className="font-medium text-[0.92vw]">Class</h4>
                    <span className="text-[0.8vw] text-gray-600">{productData.class}</span>
                  </div>
                  {/* Fragnance Notes */}
                  <div className="flex items-center justify-between py-[1.5vw] px-[0.8vw] border-t border-t-black/10">
                    <h4 className="font-medium text-[0.92vw] whitespace-nowrap">Fragnance notes</h4>
                    <span className="text-[0.8vw] text-gray-600">{productData.notes}</span>
                  </div>
                  {/* Fragnance Family */}
                  <div className="flex items-center justify-between py-[1.5vw] px-[0.8vw] border-t border-t-black/10">
                    <h4 className="font-medium text-[0.92vw] whitespace-nowrap">Fragnance Family</h4>
                    <span className="text-[0.8vw] text-gray-600">{productData.family}</span>
                  </div>
                  {/* Type */}
                  <div className="flex items-center justify-between py-[1.5vw] px-[0.8vw] border-t border-t-black/10">
                    <h4 className="font-medium text-[0.92vw]">Type</h4>
                    <span className="text-[0.8vw] text-gray-600">{productData.category}</span>
                  </div>
                  {/* Style */}
                  <div className="flex items-center justify-between py-[1.5vw] px-[0.8vw] border-t border-t-black/10">
                    <h4 className="font-medium text-[0.92vw]">Style</h4>
                    <span className="text-[0.8vw] text-gray-600">{productData.style}</span>
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