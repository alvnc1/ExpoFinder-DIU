import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import PMVComponent from '../pages/proyecto2'
import Formulario from '../pages/formulario'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/proyecto2' element={<PMVComponent/>} />
        <Route path='/formulario' element={<Formulario/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter


/*

*/