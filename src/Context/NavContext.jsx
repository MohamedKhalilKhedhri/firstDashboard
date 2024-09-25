import React, { createContext, useState } from 'react'


export const NavContext = createContext(null);

function NavContextProvider({children}) {
    const [navOpen,setNavState] = useState(null);
    const  NavState=(s)=>{
        setNavState(s);
        console.log(navOpen);
    }
    
  
   
  return (
    <NavContext.Provider value={{navOpen,NavState}}>
        {children}
    </NavContext.Provider>
  )
}

export default NavContextProvider