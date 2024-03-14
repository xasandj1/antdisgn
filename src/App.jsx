import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './Layout/MainLayout'
import { Home } from './pages/Home/Home'
import { UserLayout } from './Layout/UserLayout'
import { Profile } from './pages/User/Profile'
import { Addres } from './pages/User/Addres'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='user' element={<UserLayout />}>
          <Route index element={<Profile />} />
          <Route path='address' element={<Addres />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
