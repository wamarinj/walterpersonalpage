import './App.css'
import React from 'react'
import MyNavBar from './components/MyNavBar'
import { HashRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Portafolio from './components/Portafolio'
import Spanish from './components/Spanish'
import Contact from './components/Contact'


function App() {
  
  return (
    <HashRouter>
      < MyNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spanish" element={<Spanish /> } />
        <Route path="/about" element={<About />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/contact" element={<Contact /> } />
      </Routes>
    </HashRouter>
  )
}

export default App
