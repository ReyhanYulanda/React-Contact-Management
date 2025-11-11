import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/layout'
import UserRegister from './components/user/UserRegister'
import UserLogin from './components/user/UserLogin'
import DashboardLayout from './components/DashboardLayout'
import UserProfile from './components/user/UserProfile'
import UserLogout from './components/user/UserLogout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/register' element={<UserRegister />}></Route>
          <Route path='/login' element={<UserLogin />}></Route>
        </Route>
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='contacts' element={<div>Contacts Page</div>}></Route>
          <Route path='users/profile' element={<UserProfile />}></Route>
          <Route path='users/logout' element={<UserLogout />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
