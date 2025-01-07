import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TypingContextProvider } from './context/TypingContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TypingContextProvider>
      <App />
    </TypingContextProvider>
  </StrictMode>,
)
