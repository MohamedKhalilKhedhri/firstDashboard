import React, { createContext, useState } from 'react'


export const NContext = createContext(null);

function NContextProvider({children}) {
    const [NState,setNState] = useState(false);
   
  
   
  return (
    <NContext.Provider value={{NState,setNState}}>
        {children}
    </NContext.Provider>
  )
}

export default NContextProvider