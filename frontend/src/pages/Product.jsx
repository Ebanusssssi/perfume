import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { PRODUCTS } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState(false);

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
                <p className="w-fit text-gray-600 text-[2.9vw] lg:text-[0.75vw] leading-none border-b border-b-gray-600">125 reviews</p>
              </div>
              {/* Type & Sex */}
              <p className="mt-[1.2vw] lg:mt-[0.5vw] text-[3vw] lg:text-[0.8vw] font-medium lg:font-normal">Eau de Parfum, Unisex</p>

              <div className="w-full h-[200vw] lg:h-[100vw] bg-gray-100 rounded-[2.5vw] lg:rounded-[0.5vw]"></div>
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