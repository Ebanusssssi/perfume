import { Link } from "react-router-dom"
import { REGISTER_CONTENT } from "../assets/constants"

const Register = () => {
  return (
    <main className="h-fit lg:h-[120vh] w-full">
      <div className="h-full w-full relative overflow-hidden lg:flex lg:items-center lg:justify-end">
        <img src={REGISTER_CONTENT.backgroundLG} alt="" className="hidden lg:block absolute h-full w-full -z-10 top-0 object-cover object-center" />
        <img src={REGISTER_CONTENT.backgroundSM} alt="" className="block lg:hidden w-full mt-[18vw]" />
        <form action="" className="flex flex-col items-center gap-[10vw] lg:gap-[2vw] w-full h-fit lg:w-[40vw] lg:mr-[10vw] py-[8vw] lg:py-[4vw] px-[8vw] lg:px-[3vw] bg-white rounded-[1vw]">
          <div className="w-full flex flex-col items-start gap-[0.2vw]">
            <h2 className="text-[7vw] lg:text-[2vw] font-medium tracking-wide lg:tracking-normal">{REGISTER_CONTENT.title}</h2>
            <div className="flex items-center gap-[1vw] lg:gap-[0.5vw] pl-[0.2vw] text-[3.2vw] lg:text-[0.8vw] font-medium tracking-wide lg:tracking-normal">
              <p className="">{REGISTER_CONTENT.haveAccount}</p>
              <Link to="/login" className="border-b border-b-black text-black hover:text-blue-500 transition-colors ease-in-out hover:border-b-blue-500">{REGISTER_CONTENT.registerLink}</Link>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-[5vw] lg:gap-[1vw]">
            <input 
              type="text" 
              name="Name" 
              id="Name" 
              placeholder="Name" 
              required 
              className="block w-full p-[5vw] lg:p-[1vw] text-gray-900 border border-gray-300 rounded-2xl lg:rounded-xl text-[3.5vw] font-medium lg:text-base focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <input 
              type="email" 
              name="email" 
              id="Email" 
              placeholder="Email" 
              required
              className="block w-full p-[5vw] lg:p-[1vw] text-gray-900 border border-gray-300 rounded-2xl lg:rounded-xl text-[3.5vw] font-medium lg:text-base focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <select 
              id="country" 
              className="appearance-none block w-full p-[5vw] lg:p-[1vw] text-[3.5vw] font-medium lg:text-base text-gray-900 border border-gray-300 rounded-2xl lg:rounded-xl focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option selected>Choose a country</option>
              <option value="UKR">Ukraine</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <select 
              id="gender" 
              className="appearance-none block w-full p-[5vw] lg:p-[1vw] text-[3.5vw] font-medium lg:text-base text-gray-900 border border-gray-300 rounded-2xl lg:rounded-xl focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option selected>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="none">Prefer not to say</option>
            </select>
            <input 
              type="password" 
              name="Password" 
              id="password" 
              placeholder="Password" 
              required
              className="block w-full p-[5vw] lg:p-[1vw] text-gray-900 border border-gray-300 rounded-2xl lg:rounded-xl text-[3.5vw] font-medium lg:text-base focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <Link to="/terms-and-conditions" className="px-[1vw] text-center">
              <p className="text-[3.2vw] lg:text-[0.8vw] font-medium text-black/50 hover:text-blue-500 transition-colors ease-in-out hover:border-b-blue-500">{REGISTER_CONTENT.terms}</p>
            </Link>
            <button
              onClick={(e) => e.preventDefault()}
              className="w-full font-normal lg:font-semibold text-[4vw] lg:text-[1vw] tracking-wide text-white bg-black border border-black hover:border-slate-200 
              px-[15vw] py-[5vw] my-[1vw] lg:px-[2.4vw] lg:py-[1.2vw] rounded-full 
              hover:text-black hover:bg-white hover:scale-105 transition-all duration-300 ease-in-out
              cursor-pointer"
            >
              {REGISTER_CONTENT.signInButton}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Register