import React from 'react';
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import Menu from '../assets/Menu.png'

function PMVComponent() {
  return (
    <div className='page'>
      <h1 className='page__title'>ExpoFinder</h1>
      <NavBar></NavBar>
      <div className="pmv-container">
        <div className="pmv-item">
            <img src={Menu} height={300} alt="Imagen 1" />
            <p>Mind Guardian</p>
        </div>        
      </div>
        <h2 className='label'>Descripcion del proyecto</h2>
        <div className='parrafo-container'>
        Un juego para niños entre 6 a 12 años, el cual recoge patrones y los analiza con inteligencia artificial para detectar patrones de alerta, respaldado por psicologos infantiles, para que puedan ser abordados a tiempo.
        </div>
        <h2 className='label'>Dominio de la pagina</h2>
        <div className='parrafo-container'>
        https://mindguardian.feriadesoftware.cl
        </div>
        <h2 className='label'>Fecha de publicacion</h2>
        <div className='parrafo-container'>
        20 de Agosto de 2023
        </div>
        <h2 className='label'>Tema del proyecto</h2>
        <div className='parrafo-container'>
        Ciencia y Teconologia
        </div>
      </div>
        
  );
}

export default PMVComponent;


