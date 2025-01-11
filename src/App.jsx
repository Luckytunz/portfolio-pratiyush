import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Gallery from './pages/Gallery'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<div>About Page Coming Soon</div>} />
        <Route path="/contact" element={<div>Contact Page Coming Soon</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
