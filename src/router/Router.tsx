import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Home } from '../pages/Home'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='menu' element={<h1>Menu</h1>} />
        <Route path='service' element={<h1>Services</h1>} />
        <Route path='about' element={<h1>About Us</h1>} />
        <Route path='contact' element={<h1>Contact</h1>} />
      </Route>
    </Routes>
  )
}
