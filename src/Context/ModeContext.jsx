import React, { createContext , useState , useEffect } from 'react'

export const ModeContext = createContext(null);

function ModeContextProvider({children}) {
    
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme"): "light")

    useEffect(()=>{
      localStorage.setItem("theme",theme);
      const localtheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme",localtheme);
    },[theme])
  

  return (
    <ModeContext.Provider value={{theme,setTheme}}>{children}</ModeContext.Provider>
  )
}

export default ModeContextProvider