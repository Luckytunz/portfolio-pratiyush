import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<div>Gallery Page Coming Soon</div>} />
        <Route path="/about" element={<div>About Page Coming Soon</div>} />
        <Route path="/contact" element={<div>Contact Page Coming Soon</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
