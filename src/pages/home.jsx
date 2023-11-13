import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/imagen.png';
import Image1 from '../assets/motion.png';
import Image2 from '../assets/cuisine.png';
import Image3 from '../assets/readdy.png';
import NavBar from '../components/nav_bar';

import SearchBar from '../components/SearchBar';
import { grey } from '@mui/material/colors';

function Home() {
  const linkStyles = {
    textDecoration: 'none',
    color: 'inherit',
  };

  const boxStyles = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    textAlign: 'center',
  };

  const backgroundStyles = {
    backgroundColor: '#D9D9D9',
    height: '12vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50px',
  };

  const containerStyles = {
    position: 'relative',
  };

  const searchBarStyles = {
    position: 'center',
    top: '10px',
    right: '20px',
    maxWidth: '100px',
  };

  const handleSearch = (searchTerm, selectedTheme) => {
    alert(`Búsqueda: ${searchTerm}, Tema: ${selectedTheme}`);
  };

  return (
    <div style={containerStyles}>
      <div style={backgroundStyles}>
        <NavBar />
      </div>
      <img src={Image} alt="Logo" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '88%', maxHeight: '480px'}} />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}>
        <div className="box" style={{ margin: '50px', textAlign: 'left', ...boxStyles, border: 'none', borderRadius: '10px' }}>
          <Link to="/mindguardian" style={{ ...linkStyles }}>
            <img src={Image1} width={300} height={300} alt="Descripción de la imagen" style={{ borderRadius: '10px', marginBottom: '10px' }} />
            <div style={{ paddingLeft: '10px' }}>
              <h2 style={{ margin: '0' }}>Mindfull Motion</h2>
              <p style={{ color: '#999', fontSize: '0.9em', margin: '0' }}>mindfullmotion.feriadesoftware.cl</p>
            </div>
          </Link>
        </div>

        <div className="box" style={{ margin: '50px', textAlign: 'left', ...boxStyles, border: 'none', borderRadius: '10px' }}>
          <Link to="/naturequest" style={{ ...linkStyles }}>
            <img src={Image2} width={300} height={300} alt="Descripción de la imagen" style={{ borderRadius: '10px', marginBottom: '10px' }} />
            <div style={{ paddingLeft: '10px' }}>
              <h2 style={{ margin: '0' }}>CuisineAR</h2>
              <p style={{ color: '#999', fontSize: '0.9em', margin: '0' }}>cuisinear.feriadesoftware.cl</p>
            </div>
          </Link>
        </div>

        <div className="box" style={{ margin: '50px', textAlign: 'left', ...boxStyles, border: 'none', borderRadius: '10px' }}>
          <Link to="/safesym" style={{ ...linkStyles }}>
            <img src={Image3} width={300} height={300} alt="Descripción de la imagen" style={{ borderRadius: '10px', marginBottom: '10px' }} />
            <div style={{ paddingLeft: '10px' }}>
              <h2 style={{ margin: '0' }}>Readdy</h2>
              <p style={{ color: '#999', fontSize: '0.9em', margin: '0' }}>readdy.feriadesoftware.cl</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;