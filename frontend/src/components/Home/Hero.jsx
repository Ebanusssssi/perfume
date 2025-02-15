import { HOME_HERO } from "../../assets/constants"
import GoToProductsButton from "../../components/GoToProductsButton";
import Carousel from "../Carousel";

const Hero = () => {
  
  return (
    <section className="flex h-screen relative">
      {/* Text */}
      <div className="pb-[22vw] lg:pb-0 w-full lg:w-2/4 h-full flex flex-col items-center justify-center lg:justify-center gap-[4vw] lg:gap-[1vw] z-10 text-white lg:text-black">
        <h2 className="max-w-[90%] lg:max-w-[70%] text-center leading-tight lg:leading-none text-[10vw] lg:text-[3vw] font-medium select-none">{HOME_HERO.title}</h2>
        <p className="max-w-[90%] lg:max-w-[80%] font-normal text-center leading-tight text-[5vw] tracking-wide lg:text-[1.5vw] select-none">{HOME_HERO.description}</p>
        <div className="fixed bottom-[3.5vw] lg:bottom-0 lg:relative mt-[1.5vw]">
          <GoToProductsButton />
        </div>
      </div>
      {/* Image Carousel*/}
      <div className="h-full lg:w-2/3 lg:relative absolute overflow-hidden">
        <Carousel images={HOME_HERO.images} />
      </div>
    </section>
  )
}

export default Hero