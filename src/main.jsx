import { AnimatePresence } from 'framer-motion'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StateContextProvider } from './context/StateContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <StateContextProvider>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </StateContextProvider>
  </>
)
