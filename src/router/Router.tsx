import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<h1>Home</h1>} />
        <Route path='menu' element={<h1>Menu</h1>} />
        <Route path='service' element={<h1>Services</h1>} />
        <Route path='about' element={<h1>About Us</h1>} />
        <Route path='contact' element={<h1>Contact</h1>} />
      </Route>
    </Routes>
  )
}
