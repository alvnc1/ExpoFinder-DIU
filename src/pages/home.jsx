import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/imagen.png';
import Image1 from '../assets/Menu.png';
import Image2 from '../assets/naturequestog.png';
import Image3 from '../assets/safesym.png';
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
    position: 'absolute',
    top: '20px',
    right: '20px',
    maxWidth: '300px',
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
        <div className="box" style={{ margin: '50px', textAlign: 'center', ...boxStyles }}>
          <Link to="/mindguardian" style={{ ...linkStyles }}>
            <img src={Image1} width={200} alt="Descripción de la imagen" />
            <h2>Mind Guardian</h2>
            <p style={{ color: '#999', fontSize: '0.9em' }}>https://mindguardian.feriadesoftware.cl.</p>
          </Link>
        </div>
        <div className="box" style={{ margin: '50px', textAlign: 'center', ...boxStyles }}>
          <Link to="/naturequest" style={{ ...linkStyles }}>
            <img src={Image2} width={200} alt="Descripción de la imagen" />
            <h2>NatureQuest</h2>
            <p style={{ color: '#999', fontSize: '0.9em' }}>https://naturequest.feriadesoftware.cl/naturequest/</p>
          </Link>
        </div>
        <div className="box" style={{ margin: '50px', textAlign: 'center', ...boxStyles }}>
          <Link to="/safesym" style={{ ...linkStyles }}>
            <img src={Image3} width={200} alt="Descripción de la imagen" />
            <h2>SafeSym</h2>
            <p style={{ color: '#999', fontSize: '0.9em' }}>https://safesym.feriadesoftware.cl</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;