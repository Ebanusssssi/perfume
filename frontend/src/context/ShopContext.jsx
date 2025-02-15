import { useState, createContext } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const [modalSearchActive, setModalSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);


  const value = {
    modalSearchActive,
    setModalSearchActive,
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