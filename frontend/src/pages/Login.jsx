import { Link } from "react-router-dom"
import { LOGIN_CONTENT } from "../assets/constants"

const Login = () => {
  return (
    <main className="h-fit lg:h-[120vh] w-full">
      <div className="h-full w-full relative overflow-hidden lg:flex lg:items-center lg:justify-end">
        <img src={LOGIN_CONTENT.backgroundLG} alt="" className="hidden lg:block absolute h-full w-full -z-10 top-0 object-cover object-center" />
        <img src={LOGIN_CONTENT.backgroundSM} alt="" className="block lg:hidden w-full mt-[18vw]" />
        <form action="" className="flex flex-col items-center gap-[10vw] lg:gap-[2vw] w-full h-fit lg:w-[40vw] lg:mr-[10vw] py-[8vw] lg:py-[4vw] px-[8vw] lg:px-[3vw] bg-white rounded-[1vw]">
          <div className="w-full flex flex-col items-center gap-[2vw] lg:flex-row lg:items-baseline lg:justify-between">
            <h2 className="text-[7vw] lg:text-[2vw] font-medium tracking-wide lg:tracking-normal">{LOGIN_CONTENT.title}</h2>
            <div className="flex items-center gap-[1vw] lg:gap-[0.5vw] text-[3.2vw] lg:text-[0.8vw] font-medium tracking-wide lg:tracking-normal">
              <p className="">{LOGIN_CONTENT.notYet}</p>
              <Link to="/register" className="border-b border-b-black text-black hover:text-blue-500 transition-colors ease-in-out hover:border-b-blue-500">{LOGIN_CONTENT.registerLink}</Link>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-[5vw] lg:gap-[1vw]">
            <input 
              type="text" 
              name="Name" 
              id="Name" 
              placeholder="Name" 
              required 
              className="block w-full p-[5vw] lg:p-[1vw] text-gray-900 border border-gray-300 rounded-2xl text-[3.5vw] font-medium lg:text-base focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <input 
              type="email" 
              name="Email" 
              id="Email" 
              placeholder="Email" 
              required
              className="block w-full p-[5vw] lg:p-[1vw] text-gray-900 border border-gray-300 rounded-2xl text-[3.5vw] font-medium lg:text-base focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <input 
              type="password" 
              name="Password" 
              id="Password" 
              placeholder="Password" 
              required
              className="block w-full p-[5vw] lg:p-[1vw] text-gray-900 border border-gray-300 rounded-2xl text-[3.5vw] font-medium lg:text-base focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <button
              onClick={(e) => e.preventDefault()}
              className="w-full font-normal lg:font-semibold text-[4vw] lg:text-[1vw] tracking-wide text-white bg-black border border-black hover:border-slate-200 
              px-[15vw] py-[5vw] my-[1vw] lg:px-[2.4vw] lg:py-[1.2vw] rounded-full 
              hover:text-black hover:bg-white hover:scale-105 transition-all duration-300 ease-in-out
              cursor-pointer"
            >
              {LOGIN_CONTENT.signInButton}
            </button>
          </div>
          <div className="w-full flex justify-center">
            <Link to="/recovery" className="text-[3.2vw] lg:text-[0.8vw] font-medium border-b border-b-black text-black hover:text-blue-500 transition-colors ease-in-out hover:border-b-blue-500">
              {LOGIN_CONTENT.forgot}
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login