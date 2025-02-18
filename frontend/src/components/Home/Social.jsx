import { HOME_SOCIAL } from "../../assets/constants"

const Social = () => {
  return (
    <section className="w-full h-fit flex flex-col justify-center items-center gap-[11vw] lg:gap-[4.5vw] py-[15vw] lg:py-[5vw]">
      <h2 className="font-bold text-[10vw] lg:text-[5vw] tracking-wide leading-tight">{HOME_SOCIAL.title}</h2>
      <div className="flex items-center gap-[5vw] lg:gap-[3.5vw] h-fit w-fit overflow-x-auto lg:overflow-x-hidden scrollbar-hidden">
        {HOME_SOCIAL.socialPosts.map((image, index) => (
          <a key={index} href={image.href} className="min-w-[40%] lg:min-w-0 lg:w-1/5 overflow-hidden"><img src={image.image} alt="Social post" className="w-full h-full object-cover" /></a>
        ))}
      </div>
    </section>
  )
}

export default Social