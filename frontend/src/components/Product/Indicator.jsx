const Indicator = ({ title, data, range }) => {
  return (
    <div className="w-full flex flex-col items-start justify-between gap-[1.5vw] lg:gap-[0.5vw] py-[3.6vw] lg:py-[0.8vw] border-t border-t-black/10">
      {/* Title */}
      <div className="flex">
        <h4 className="font-medium text-[3.5vw] lg:text-[0.92vw] whitespace-nowrap tracking-wide lg:tracking-normal">{title}</h4>
      </div>
      {/* Indicator */}
      <div className="h-[7vw] lg:h-[2.1vw] w-full bg-black/80 relative overflow-hidden">
        <div style={{ left: `${data}%`}} className={`absolute top-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,_rgba(0,0,0,0)_0%,_rgba(255,255,255,1)_20%,_rgba(255,255,255,1)_100%)] h-[110%] w-full`}></div>
      </div>
      {/* 4 hour - 12 hours */}
      <div className="w-full flex items-center justify-between">
        {
          range && range.map((item, index) => (
            <span key={index} className="text-[3.3vw] lg:text-[0.8vw] text-gray-600">{item}</span>
          ))
        }
      </div>
    </div>
  )
}

export default Indicator