import { useEffect, useState } from "react";


const Carousel = ({images}) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    console.log('effect');
    
    const timer = setTimeout(() => {
      console.log('timer');
      
      setSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 7000); // Интервал переключения слайдов 7 секунд

    return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
  }, [slide, images.length]); // Зависимость от слайда и длины массива изображений

  return (
    <div className="w-full h-full flex">
      {
        images.map((item, index) => (
          <img 
            key={index}
            src={item} 
            alt="Slide Image"
            className={`min-w-full h-full object-cover object-center transform translate-x-[-${slide * 100}%] transition-all duration-1000 ease-in-out`}
          />
        ))
      }
    </div>

  )
}

export default Carousel