import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DialogSelect from './DialogSelect.tsx'
import Navbar from './Navbar.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>

      <BrowserRouter>
      <Navbar />
        <Routes>
          
          <Route path="/" element={ <DialogSelect />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
