import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ChefClaudeApp from './ChefClaudeApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChefClaudeApp />
  </StrictMode>,
)
