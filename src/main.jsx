import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cep from './cep.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cep />
  </StrictMode>,
)
