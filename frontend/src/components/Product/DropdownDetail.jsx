import { useState } from "react";
import { PRODUCT_CONTENT } from "../../assets/constants";

const DropdownDetail = ({ title, data }) => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className="flex flex-col items-start gap-[1.5vw] lg:gap-[0.5vw] py-[3vw] lg:py-[0.75vw] border-t border-t-black/10">
      <div onClick={() => setShowNotes(prev => !prev)} className="w-full flex items-center justify-between px-[3vw] py-[1.5vw] lg:px-[0.8vw] lg:py-[0.75vw] cursor-pointer hover:bg-gray-100">
        <h4 className="font-medium text-[3.5vw] lg:text-[0.92vw] whitespace-nowrap">{title}</h4>
        <div className={`${showNotes ? "-rotate-180" : "rotate-0"} transition-all ease-in-out`}>{PRODUCT_CONTENT.icons.chevron}</div>
      </div>
      <ul className={`${showNotes ? "flex opacity-100" : "hidden opacity-0"} flex flex-col items-start gap-[1.5vw] lg:gap-[0.5vw] px-[3vw] pb-[1.5vw] lg:px-[0.8vw] lg:pb-[0.75vw] transition-all ease-in-out`}>
        {
          data && data.map((note, index) => (
            <li key={index} className="text-[3.3vw] lg:text-[0.92vw] text-gray-600">{note}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default DropdownDetail