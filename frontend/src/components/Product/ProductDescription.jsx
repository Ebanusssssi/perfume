import { useState } from "react";

const ProductDescription = ({title, description, productTitle, more}) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className={`${showDescription ? 'h-fit' : 'h-[45vw] lg:h-[12vw]'} w-full overflow-hidden relative mb-[1vw]`}>
      <h4 className="text-[4vw] lg:text-[1.1vw] tracking-wide font-medium text-black mb-[1vw] lg:mb-[0.5vw]">{title}</h4>
      <p className="text-[3.9vw] lg:text-[1vw] tracking-wide font-medium leading-relaxed text-gray-600">{description}</p>
      <p className="mt-[2vw] lg:mt-[1vw] text-[3vw] lg:text-[0.76vw] tracking-wide lg:leading-relaxed text-gray-500">
        Read the {productTitle} reviews from our customers to learn more about the fragrance. Experience {productTitle} for a whole month by adding it to your perfume calendar.
      </p>
      {
        !showDescription &&
        <div className="absolute left-0 right-0 bottom-0 z-30 h-[15vw] lg:h-[4vw] bg-gradient-to-t from-white via-white to-transparent flex items-end">
          <button onClick={() => setShowDescription(true)} className="text-[3.9vw] lg:text-[1vw] font-medium tracking-wide">{more}</button>
        </div>
      }
    </div>
  )
}

export default ProductDescription