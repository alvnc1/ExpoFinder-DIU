import React from 'react'
import backgroundImage from '../assets/fondo2.jpg';
import NavBar from '../components/nav_bar'

export const Formulario = () => {
  return (
    <><div style={{
      backgroundImage: `url(${backgroundImage})`,
      height: '13vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ color: '#fff', fontSize: '2em' }}>ExpoFinder</h1>
      <NavBar />
    </div><div className='page'>
        <h1>Subir tu proyecto</h1>
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
              <button type='submit' className='submit-button'>Examinar</button>
            </label>
            <label>
              Descripcion del proyecto
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </label>
            <button type="submit" className='submit-button'>Subir Proyecto</button>
          </form>
        </div>
      </div></>
  )
}

export default Formulario