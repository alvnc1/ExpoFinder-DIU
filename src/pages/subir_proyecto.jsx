import React from 'react'
import NavBar from '../components/nav_bar'

export const Formulario = () => {
  return (
    <><div style={{
      backgroundColor: '#D9D9D9',
      height: '12vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '50px',
    }}>
      <NavBar />
    </div>
    
    <div className='page'>
        <h1>Subir tu proyecto</h1>
        <div className='form-container'>
          <form className='form'>
            <label>
              Nombre del Proyecto
              <input
                className='input-box'
                type='text'
                name="projectName">
              </input>
            </label>
            <label>
              Dominio de la pagina
              <input
                className='input-box'
                type='text'
                name="projectName">
              </input>
            </label>

            <label>
              Fecha de Publicación
              <input
                className='input-box'
                type='text'
                name="projectName">
              </input>
            </label>
            <label>
              Tema del Proyecto
              <input
                className='input-box'
                type='text'
                name="projectName">
              </input>
            </label>


            <label>
              Foto de la pagina
              <input
                className='input-box'
                type='text'
                name="projectName">
              </input>
              <button type='submit' className='submit-button'>Examinar</button>
            </label>
            <label>
              Descripcion del proyecto
              <textarea className='input-box'name="" id="" cols="30" rows="10"></textarea>
            </label>
            <button type="submit" className='submit-button'>Subir Proyecto</button>
          </form>
        </div>
      </div></>
  )
}

export default Formulario