import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ModeContextProvider from './Context/ModeContext.jsx'
import NavContextProvider from './Context/NavContext.jsx'
import NContextProvider from './Context/NContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <NContextProvider >
      <ModeContextProvider>
        <NavContextProvider>
          <App />
        </NavContextProvider>
      </ModeContextProvider>
    </NContextProvider>
  </StrictMode>,
)
