import { HOME_STEPS } from "../../assets/constants"

const Steps = () => {
  return (
    <section className="w-full h-fit flex flex-col items-center justify-center gap-[8vw] lg:gap-0 relative py-[8vw] px-[8vw] lg:py-0 lg:px-0 bg-[#F5F3E7]">

      {/* Video */}
      <div className="h-[80vw] w-full lg:w-full lg:h-full flex items-center justify-center overflow-hidden rounded-[5vw] lg:rounded-none">
        <video autoPlay muted loop media="(min-width: 52em)" type="video/mp4" src={HOME_STEPS.video} className="h-full lg:h-fit w-full object-cover object-right lg:object-center">
          {/* <source  /> */}
        </video>
      </div>

      {/* Steps */}
      <div 
        className="h-fit w-full lg:w-[32vw] flex flex-col items-center justify-center py-[1vw] px-[10vw] lg:px-[3.5vw] 
        bg-white rounded-[5vw] lg:rounded-[2vw] relative lg:absolute lg:left-[5vw] lg:top-1/2 lg:-translate-y-1/2 divide-y">
        {
          HOME_STEPS.steps.map((step, index) => (
            <div key={index} className="w-full h-fit flex flex-col items-center text-center py-[7vw] lg:py-[2vw] gap-[1.3vw]">
              <span className="text-[4vw] lg:text-[1vw] font-medium">{step.number}</span>
              <h3 className="text-[4.4vw] lg:text-[1.2vw] font-medium">{step.title}</h3>
              <p className="text-[2.8vw] lg:text-[0.75vw] font-medium leading-relaxed text-gray-500">{step.description}</p>
              {/* <hr className="h-[0.05vw] w-full bg-gray-200 border-none"/> */}
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default Steps