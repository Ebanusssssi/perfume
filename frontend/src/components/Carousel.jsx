import { useEffect, useState } from "react";


const Carousel = ({images}) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlide((prevSlide) => {
        // Переход к следующему слайду, если текущий последний, возвращаем на первый
        return prevSlide === images.length - 1 ? 0 : prevSlide + 1;
      });
    }, 7000); // Интервал переключения слайдов 7 секунд

    // Очистка таймера при размонтировании или изменении состояния
    return () => clearTimeout(timer);
  }, [slide, images.length]); // Зависимость от состояния слайда и количества изображений


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