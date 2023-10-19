import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import PMVComponent from '../pages/mindguardian'
import Formulario from '../pages/formulario'
import NatureQuest from '../pages/naturequest'
import SafeSym from '../pages/safesym'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<Formulario />} />
        <Route path='/mindguardian' element={<PMVComponent/>} />
        <Route path='/naturequest' element={<NatureQuest/>} />
        <Route path='/safesym' element={<SafeSym/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
