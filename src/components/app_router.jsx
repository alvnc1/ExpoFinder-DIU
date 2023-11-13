import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import PMVComponent from '../pages/mindguardian'
import Formulario from '../pages/subir_proyecto'
import NatureQuest from '../pages/naturequest'
import SafeSym from '../pages/safesym'
import FigmaForm from '../pages/figmaform'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/subir_proyecto' element={<Formulario />} />
        <Route path='/mindguardian' element={<PMVComponent/>} />
        <Route path='/naturequest' element={<NatureQuest/>} />
        <Route path='/safesym' element={<SafeSym/>} />
        <Route path='/form2' element={<FigmaForm/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
