import { useEffect, useState } from "react";


const Carousel = ({images}) => {
  const [slide, setSlide] = useState(0);

  // Функция для смены слайда
  const changeSlide = () => {
    setSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(changeSlide, 7000); // Смена слайдов каждую 7 секунд
    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, [images.length, slide]); // Делаем зависимость от длины массива изображений`


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