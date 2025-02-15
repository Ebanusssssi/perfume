import { HOME_HERO } from "../assets/constants"

const GoToProductsButton = () => {
  return (
    <button
      // onClick={() => setMenuActive(true)} 
      className="font-normal lg:font-semibold text-[4vw] lg:text-[1vw] tracking-wide text-white bg-black border border-black hover:border-slate-200 
      px-[15vw] py-[5vw] lg:px-[2.4vw] lg:py-[1.2vw] rounded-full 
      hover:text-black hover:bg-white hover:scale-110 transition-all duration-300 ease-in-out
      cursor-pointer"
    >
        {HOME_HERO.buttonText}
    </button>
  )
}

export default GoToProductsButton