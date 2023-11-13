import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import Mindfull from '../pages/mindfullmotion'
import Formulario from '../pages/subir_proyecto'
import NatureQuest from '../pages/naturequest'
import SafeSym from '../pages/safesym'
import Versiones from '../pages/v_anteriores'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/v_anteriores' element={<Versiones />} />
        <Route path='/subir_proyecto' element={<Formulario />} />
        <Route path='/mindfullmotion' element={<Mindfull/>} />
        <Route path='/naturequest' element={<NatureQuest/>} />
        <Route path='/safesym' element={<SafeSym/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
