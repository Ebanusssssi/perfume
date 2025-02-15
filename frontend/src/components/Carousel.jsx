import { useEffect, useState } from "react";


const Carousel = ({images}) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSlide(slide === images.length - 1 ? 0 : slide + 1)
    }, 7000);
  },)

  return (
    <div className="w-full h-full flex">
      {
        images.map((item, index) => (
          <img 
            key={index}
            src={item} 
            alt="Slide Image"
            className={`min-w-full h-full object-cover object-center transform translate-x-[-${100 * slide}%] transition-all duration-1000 ease-in-out`}
          />
        ))
      }
    </div>

  )
}

export default Carousel