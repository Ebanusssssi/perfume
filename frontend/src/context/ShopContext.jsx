import { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { PRODUCTS } from "../assets/constants";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const [modalCalendarActive, setModalCalendarActive] = useState(false);
  const [modalSearchActive, setModalSearchActive] = useState(false);
  const [modalFiltersActive, setModalFiltersActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const [calendarItems, setCalendarItems] = useState(Array(24).fill(null));
  const [isCalendarFull, setIsCalendarFull] = useState(false);


  // Getting calendar data from localstorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('calendarItems'));
    if (storedItems) {
      setCalendarItems(storedItems);
    }
  }, [])

  // Adding product to calendar
  const addToCalendar = (item) => {
    if (calendarItems.filter(item => item !== null).length === 24) {
      setIsCalendarFull(true)
      return
    }

    setCalendarItems((prevItems) => {
      const newItems = [...prevItems];
      const emptyIndex = newItems.findIndex((cell) => cell === null)

      if (emptyIndex !== -1) {
        newItems[emptyIndex] = { ...item, uniqueId: uuidv4() };
      }
       
      localStorage.setItem('calendarItems', JSON.stringify(newItems));

      return newItems;
    })
  }

  // Deleting product from calendar
  const removeFromCalendar = (uniqueId) => {

    setCalendarItems((prevItems) => {
      if (!prevItems) return Array(24).fill(null);

      const newItems = [...prevItems];
      const indexToRemove = newItems.findIndex((item) => item?.uniqueId === uniqueId);

      if (indexToRemove !== -1) {
        newItems[indexToRemove] = null;
      }

      if (newItems.filter(item => item !== null).length !== 24) {
        setIsCalendarFull(false)
      }

      localStorage.setItem('calendarItems', JSON.stringify(newItems));

      return newItems
    })
  }


  const value = {
    PRODUCTS,

    calendarItems,
    setCalendarItems,

    addToCalendar,
    removeFromCalendar,

    isCalendarFull,
    setIsCalendarFull,

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