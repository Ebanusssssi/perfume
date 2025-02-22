
const Loader = ({ boxHeight, boxWidth, loaderSize }) => {
  return (
    <div className={`w-${boxWidth} min-h-${boxHeight} rounded-[2vw] flex items-center justify-center opacity-50`}>
      <div className={`size-${loaderSize} rounded-full bg-gradient-to-r from-transparent to-gray-500 animate-spin`}></div>
    </div>
  )
}

export default Loader