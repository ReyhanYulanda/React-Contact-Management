import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element>
          <Route path='/register'></Route>
        </Route>
        <Route path='/dashboard'>

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
