import { useState, createContext } from "react";
import { PRODUCTS } from "../assets/constants";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const [modalCalendarActive, setModalCalendarActive] = useState(false);
  const [modalSearchActive, setModalSearchActive] = useState(false);
  const [modalFiltersActive, setModalFiltersActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const [calendarItems, setCalendarItems] = useState(Array(24).fill(null));


  const value = {
    PRODUCTS,

    calendarItems,
    setCalendarItems,

    modalCalendarActive,
    setModalCalendarActive,

    modalSearchActive,
    setModalSearchActive,

    modalFiltersActive,
    setModalFiltersActive,

    menuActive,
    setMenuActive,
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider