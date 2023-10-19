import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        Página de inicio
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/internal'
      >
        Proyecto 1
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/proyecto2'
      >
        Proyecto 2
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/formulario'
      >
        Subir tu proyecto
      </NavLink>
    </nav>
  )
}

export default NavBar
