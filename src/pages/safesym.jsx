import React from 'react'

import NavBar from '../components/nav_bar'
import Logo from '../assets/safesym.png'
import backgroundImage from '../assets/fondo2.jpg';

export const SafeSym= () => {
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
          <div className="pmv-container">
            <div className="pmv-item">
              <img src={Logo} height={300} alt="Imagen 1" />
              <p>SafeSym</p>
            </div>
          </div>
          <h2 className='label'>Descripcion del proyecto</h2>
          <div className='parrafo-container'>
            OneBlit trae “SafeSym”, una aplicación que implementa la gamificación con tal de concientizar sobre ciberseguridad, mostrando cuales serían las consecuencias en caso de ataques y que medidas deberían de seguirse con tal de prevenirlos. La aplicación va enfocada a trabajadores que realicen labores de ofimática y que no cuenten con un conocimiento avanzado en computación. Además, nuestros clientes serán las grandes, medianas y pequeñas empresas del país, aportando en la capacitación y concientización sobre ciberseguridad de sus trabajadores y disminuyendo la efectividad de futuros ataques.
          </div>
          <h2 className='label'>Dominio de la pagina</h2>
          <div className='parrafo-container'>
            https://safesym.feriadesoftware.cl
          </div>
          <h2 className='label'>Fecha de publicacion</h2>
          <div className='parrafo-container'>
            18 de Septiembre de 2023
          </div>
          <h2 className='label'>Tema del proyecto</h2>
          <div className='parrafo-container'>
            Ciencia y Teconologia
          </div>
        </div></>
          
    );
  }

export default SafeSym;
