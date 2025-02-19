import { Link } from "react-router-dom"

const ProductItem = ({ id, image, title, brand }) => {
  return (
    <Link to={`/product/${id}`} className="w-full h-fit py-[5vw] lg:py-[3vw] bg-[#F6F5F1] rounded-[0.2vw] relative group">
      {/* Add to Calendar Button */}
      <button className="w-[8.5vw] lg:w-14 h-[8.5vw] lg:h-14 justify-center items-center bg-white rounded-full text-[4.5vw] lg:text-[1.5vw] text-gray-800 leading-none lg:hidden flex lg:group-hover:flex absolute right-[1.5vw] lg:right-[1vw] top-[1.5vw] lg:top-[1vw]">
        +
      </button>
      {/* Products Card Content */}
      <div className="w-full h-full flex flex-col items-center justify-center truncate">
        <div className="w-[40vw] h-[50vw] lg:w-[14vw] lg:h-[15vw] overflow-hidden lg:mb-[0.2vw]">
          <img src={image[0]} alt="Product image" className="h-full w-full object-cover object-center" />
        </div>
        <h3 className="max-w-[80%] lg:max-w-[90%] text-[3.5vw] lg:text-[0.95vw] font-medium truncate">{title}</h3>
        <p className="max-w-[80%] lg:max-w-[90%] text-[3.2vw] lg:text-[0.8vw] font-normal truncate">{brand}</p>
        {/* <ul className="flex items-center mt-[0.6vw] lg:mt-[0.2vw] opacity-20">
          <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
          <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
          <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
          <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
          <li className=""><img src={card.star} alt="" className="size-[3.7vw] lg:size-[1vw]" /></li>
        </ul> */}
      </div>
    </Link>
  )
}

export default ProductItem