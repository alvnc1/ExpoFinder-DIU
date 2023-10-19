import React from 'react';
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'

function PMVComponent() {
  return (
    <div className='page'>
        <NavBar></NavBar>
        <div className="pmv-container">
        <div className="pmv-item">
            <img src={LogoUSM} height={300} alt="Imagen 1" />
            <p>Texto bajo la imagen 1</p>
        </div>

        <div className="pmv-item">
            <img src={LogoUSM} height={300} alt="Imagen 2" />
            <p>Texto bajo la imagen 2</p>
        </div>

        <div className="pmv-item">
            <img src={LogoUSM} height={300} alt="Imagen 3" />
            <p>Texto bajo la imagen 3</p>
        </div>
        </div>
    </div>
  );
}

export default PMVComponent;


