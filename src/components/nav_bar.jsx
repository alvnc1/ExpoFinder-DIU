import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../assets/fesw-logo-w.png'

export const NavBar = () => {
  return (
    <nav className='nav-bar' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
      <img src={logo} height={80} alt="Imagen 1" />
      <div>
        <NavLink
          className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
          to='/'
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
          to='/v_anteriores'
        >
          Versiones Anteriores
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
          to='/subir_proyecto'
        >
          Subir Proyecto
        </NavLink>
      </div>
    </nav>
  )
}



export default NavBar
