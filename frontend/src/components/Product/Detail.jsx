
const Detail = ({ title, value }) => {
  return (
    <div className="flex items-center justify-between py-[6vw] px-[3vw] lg:py-[1.5vw] lg:px-[0.8vw] border-t border-t-black/10">
      <h4 className="font-medium text-[3.5vw] lg:text-[0.92vw]">{title}</h4>
      <span className="text-[3.3vw] lg:text-[0.92vw] text-gray-600">{value}</span>
    </div>
  )
}

export default Detail