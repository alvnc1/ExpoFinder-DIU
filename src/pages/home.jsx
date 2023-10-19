import React from 'react'

import NavBar from '../components/nav_bar'

export const HomePage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Frontend Sample App</h1>
      <NavBar />
      <h2>Página de Inicio</h2>
      <div className='form-container'>
        <form className='form'>
          <label>
            Nombre del Proyecto
            <input
            type='text'
            name="projectName">
            </input>
          </label>
          <label>
            Dominio de la pagina
            <input
            type='text'
            name="projectName">
            </input>
          </label>

          <label>
            Fecha de Publicación
            <input
            type='text'
            name="projectName">
            </input>
          </label>
          <label>
            Tema del Proyecto
            <input
            type='text'
            name="projectName">
            </input>
          </label>
          

          <label>
            Foto de la pagina 
            <input
            type='text'
            name="projectName">
            </input>
          </label>
          <label>
            Descripcion del proyecto
            <input
            type='text'
            name="projectName"
            rows="4">            
            </input>
          </label>
          <button type="submit" className='submit-button'>Subir Proyecto</button>
        </form>
      </div>
    </div>
  )
}

export default HomePage
