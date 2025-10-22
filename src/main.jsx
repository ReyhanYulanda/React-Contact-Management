import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/layout'
import UserRegister from './components/user/UserRegister'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/register' element={<UserRegister />}></Route>
        </Route>
        <Route path='/dashboard'>

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
