import { NavLink } from "react-router-dom";
import { HOME_BRANDS } from "../../assets/constants"

const Brands = () => {

  return (
    <section className="h-fit w-full overflow-hidden">
      <ul className="flex items-center w-fit h-[35vw] lg:h-[11vw] animate-slide hover:pause">
        {
          HOME_BRANDS.images.map((item, index) => (
            <NavLink to="/products" className="flex items-center justify-center h-full min-w-fit px-[10vw] lg:px-[4.5vw] overflow-hidden hover:bg-slate-50" key={index}>
              <img src={item} alt="" className="h-2/3 object-cover object-center"/>
            </NavLink>
          ))
        }
        {
          HOME_BRANDS.images.map((item, index) => (
            <NavLink to="/products" className="flex items-center justify-center h-full min-w-fit px-[10vw] lg:px-[4.5vw] overflow-hidden hover:bg-slate-50" key={index}>
              <img src={item} alt="" className="h-2/3 object-cover object-center"/>
            </NavLink>
          ))
        }
        {
          HOME_BRANDS.images.map((item, index) => (
            <NavLink to="/products" className="flex items-center justify-center h-full min-w-fit px-[10vw] lg:px-[4.5vw] overflow-hidden hover:bg-slate-50" key={index}>
              <img src={item} alt="" className="h-2/3 object-cover object-center"/>
            </NavLink>
          ))
        }
      </ul>
    </section>
  )
}

export default Brands