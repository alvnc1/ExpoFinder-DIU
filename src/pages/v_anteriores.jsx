import React from 'react'
import backgroundImage from '../assets/fondo2.jpg';
import NavBar from '../components/nav_bar'

export const Versiones = () => {
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
      </div></>
  )
}

export default Versiones