import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ResetStyle from './styled/reset.jsx'
import GlobalStyle from './styled/global.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </StrictMode>,
)
