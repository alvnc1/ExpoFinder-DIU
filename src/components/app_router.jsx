import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import Versiones from '../pages/v_anteriores'
import Formulario from '../pages/subir_proyecto'
import Mindfull from '../pages/mindfullmotion'
import CuisineAR from '../pages/cuisinear'
import Readdy from '../pages/readdy'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/v_anteriores' element={<Versiones />} />
        <Route path='/subir_proyecto' element={<Formulario />} />
        <Route path='/mindfullmotion' element={<Mindfull/>} />
        <Route path='/cuisinear' element={<CuisineAR/>} />
        <Route path='/readdy' element={<Readdy/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
