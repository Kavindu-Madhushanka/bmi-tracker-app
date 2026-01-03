import React from 'react'
import './index.css'
import Home from './component/Home'
import { Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import About from './component/About';
import Contact from './component/Contact';
import Help from './component/Help';
import Calculater from './component/Calculater';

function App() {
  

  return (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/calculater' element={<Calculater/>}/>
    </Routes>
  )
}

export default App
