import { Link } from "react-router-dom";
import { FOOTER_CONTENT } from "../assets/constants";

const Footer = () => {
  return (
    <footer className="w-full h-fit flex flex-col justify-center items-center px-[4.7vw] pb-[40vw] lg:pb-0">
      {/* Top Links */}
      <ul className="w-full flex flex-col lg:flex-row justify-center items-start lg:items-center gap-[5vw] lg:gap-[4vw] border-t border-t-slate-200 py-[7vw] lg:py-[4.5vw]">
        {
          FOOTER_CONTENT.topLinks.map((link, index) => (
            <Link key={index} to={link.link} className="text-[5vw] lg:text-[1.3vw] text-left font-semibold">{link.title}</Link>
          ))
        }
      </ul>

      {/* Middle Content */}
      <div className="w-full border-t border-t-slate-200 pt-[7vw] pb-[7vw] lg:pb-0 lg:pt-[4vw] px-[4.5vw]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[3vw] lg:gap-0 mb-[4vw] lg:mb-0">
          {/* Left Side */}
          <ul className="flex items-center gap-[4vw] lg:gap-[1.3vw]">
            <li className="text-[4vw] lg:text-[1vw] font-semibold">{FOOTER_CONTENT.socials.title}</li>
            <li className="size-[6vw] lg:size-[1.5vw]"><a href="https://www.instagram.com" target="_blank" >{FOOTER_CONTENT.socials.instagram}</a></li>
            <li className="size-[6vw] lg:size-[1.5vw]"><a href="https://www.facebook.com" target="_blank" >{FOOTER_CONTENT.socials.facebook}</a></li>
            <li className="size-[6vw] lg:size-[1.5vw]"><a href="https://www.tiktok.com" target="_blank" >{FOOTER_CONTENT.socials.tiktok}</a></li>
          </ul>
          {/* Right Side */}
          <Link to="/" className="font-black text-[10vw] lg:text-[2.5vw] tracking-normal h-full cursor-pointer">{FOOTER_CONTENT.logo}</Link>
        </div>
        {/* Payment Methods */}
        <div className="w-full h-fit flex justify-center lg:justify-end py-[1.5vw]">
          <div className="flex items-center justify-center gap-[7vw] lg:gap-[1vw] h-[8vw] lg:h-[2.7vw] opacity-60">
            {
              FOOTER_CONTENT.paymentImages.map((img, index) => (
                <img key={index} src={img} className="h-full w-auto object-cover object-center" />
              ))
            }
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <ul className="w-full flex flex-col lg:flex-row justify-center items-start lg:items-center gap-[5vw] border-t border-b lg:border-b-0 border-t-slate-200 border-b-slate-200 py-[7vw] lg:py-[2.3vw]">
        {
          FOOTER_CONTENT.bottomLinks.map((link, index) => (
            <Link key={index} to={link.link} className="text-[5vw] lg:text-[1.2vw] font-semibold lg:font-medium">{link.title}</Link>
          ))
        }
      </ul>
    </footer>
  )
}

export default Footer