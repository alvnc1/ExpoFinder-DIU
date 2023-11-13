import React from 'react'
import NavBar from '../components/nav_bar'

export const Versiones = () => {
  return (
    <><><div style={{
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
      </div></><div>
      <h1>Versiones Anteriores</h1>
          </div></>
  )
}

export default Versiones