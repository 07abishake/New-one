import React from 'react'
import './App.css'
import NavBar from './Component/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'



function App() {
  return (
    <div className='bg-white w-full h-screen'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
