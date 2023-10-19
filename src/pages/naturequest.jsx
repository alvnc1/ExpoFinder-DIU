import React from 'react'

import NavBar from '../components/nav_bar'
import Banner from '../assets/naturequestog.png'

export const NatureQuest= () => {
    return (
      <div className='page'>
        <h1 className='page__title'>ExpoFinder</h1>
        <NavBar></NavBar>
        <div className="pmv-container">
        <div className="pmv-item">
            <img src={Banner} height={300} alt="Imagen 1" />
            <p>NatureQuest</p>
        </div>        
        </div>
        <h2 className='label'>Descripcion del proyecto</h2>
        <div className='parrafo-container'>
        un juego 3D educativo en primera persona enfocado en Windows. Enseñará sobre las causas y consecuencias de la crisis climática en el medioambiente, con el objetivo
de que las personas tengan una mayor conciencia y puedan hacer del mundo un lugar mejor.
        </div>
        <h2 className='label'>Dominio de la pagina</h2>
        <div className='parrafo-container'>
        https://naturequest.feriadesoftware.cl/naturequest/
        </div>
        <h2 className='label'>Fecha de publicacion</h2>
        <div className='parrafo-container'>
        30 de Abril de 2023
        </div>
        <h2 className='label'>Tema del proyecto</h2>
        <div className='parrafo-container'>
        Ciencia y Teconologia
        </div>
        </div>
          
    );
  }

export default NatureQuest;
