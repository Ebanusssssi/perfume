import { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { PRODUCTS } from "../assets/constants";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  // Filtered products
  const [filterProducts, setFilterProducts] = useState([]);
  // Search Query
  const [searchValue, setSearchValue] = useState("");
  // Category Chips Option
  const [option, setOption] = useState(null);

  // States for all Filter Options
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [selectedFamilies, setSelectedFamilies] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);

  // Modals Active State
  const [modalCalendarActive, setModalCalendarActive] = useState(false);
  const [modalSearchActive, setModalSearchActive] = useState(false);
  const [modalFiltersActive, setModalFiltersActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  // Calendar States
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

  // Функция, которая фильтрует продукты исходя из выбранных критерий
  const applyFilterOptions = () => {
    console.log();
    
    let productsCopy = PRODUCTS.slice();
    if (option) {
      productsCopy = productsCopy.filter(item => item.category === option);
    }
    if (searchValue) {
      productsCopy = productsCopy.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.brand.toLowerCase().includes(searchValue.toLowerCase()));
    }

    if (selectedBrands || selectedGender || selectedType || selectedNotes || selectedFamilies || selectedStyles) {
      productsCopy = productsCopy.filter((item) => {
        const isBrandMatch = selectedBrands.length === 0 || selectedBrands.includes(item.brand);
        const isGenderMatch = selectedGender.length === 0 || selectedGender.includes(item.gender);
        const isTypeMatch = selectedType.length === 0 || selectedType.includes(item.class);
        const isNotesMatch = selectedNotes.length === 0 || selectedNotes.some((note) => item.notes.includes(note));
        const isFamilyMatch = selectedFamilies.length === 0 || selectedFamilies.includes(item.family);
        const isStyleMatch = selectedStyles.length === 0 || selectedStyles.includes(item.style);

        return (
          isBrandMatch &&
          isGenderMatch &&
          isTypeMatch &&
          isNotesMatch &&
          isFamilyMatch &&
          isStyleMatch
        );
      })
    }
    
    return setFilterProducts(productsCopy);
  }

  // Запускает филтрацию, при изменении любого из критериев
  useEffect(() => {
    applyFilterOptions();
  }, [searchValue, option, selectedBrands, selectedGender, selectedType, selectedNotes, selectedFamilies, selectedStyles])
  

  // Options Change Handlers
  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) => prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand])
  }
  const handleGenderChange = (gender) => {
    setSelectedGender((prev) => prev.includes(gender) ? prev.filter((g) => g !== gender) : [...prev, gender])
  }
  const handleTypeChange = (type) => {
    setSelectedType((prev) => prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type])
  }
  const handleNotesChange = (note) => {
    setSelectedNotes((prev) => prev.includes(note) ? prev.filter((n) => n !== note) : [...prev, note])
  }
  const handleFamiliesChange = (family) => {
    setSelectedFamilies((prev) => prev.includes(family) ? prev.filter((f) => f !== family) : [...prev, family])
  }
  const handleStylesChange = (style) => {
    setSelectedStyles((prev) => prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style])
  }




  // useEffect(() => {
  //   console.log(selectedStyles);
    
  // }, [selectedStyles])
  



  const value = {
    PRODUCTS,
    filterProducts,
    setFilterProducts,
    searchValue,
    setSearchValue,
    option,
    setOption,


    // Filters Options
    selectedBrands,
    setSelectedBrands,
    selectedGender,
    setSelectedGender,
    selectedType,
    setSelectedType,
    selectedNotes,
    setSelectedNotes,
    selectedFamilies,
    setSelectedFamilies,
    selectedStyles,
    setSelectedStyles,

    // Filters Options Handlers
    handleBrandChange,
    handleGenderChange,
    handleTypeChange,
    handleNotesChange,
    handleFamiliesChange,
    handleStylesChange,

    
    applyFilterOptions,

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