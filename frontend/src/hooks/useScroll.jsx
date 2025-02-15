import { useEffect, useState } from "react"

export const useScroll = () => {
    const [scrollData, setScrollData] = useState({ y: 0, lastY: 0 });
    const [hideNav, setHideNav] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollData(prevState => {
          return {
            y: window.scrollY,
            lastY: prevState.y
          }
        })
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  
    useEffect(() => {
      if (scrollData.y > 200 && scrollData.lastY < scrollData.y && scrollData.y) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
    }, [scrollData])

    return {
      hideNav
    }
}