import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ResetStyle from './styled/reset.js'
import GlobalStyle from './styled/global.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResetStyle/>
    <GlobalStyle/>
    <App />
  </StrictMode>,
)
