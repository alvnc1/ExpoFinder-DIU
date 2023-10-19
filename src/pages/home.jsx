import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/fondo2.jpg';
import Image1 from '../assets/Menu.png';
import Image2 from '../assets/naturequestog.png';
import Image3 from '../assets/safesym.png';
import NavBar from '../components/nav_bar';

// Importa el componente SearchBar
import SearchBar from '../components/Searchbar';

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
    backgroundImage: `url(${backgroundImage})`,
    height: '65vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50px',
  };

  const containerStyles = {
    position: 'relative', // Asegura que el contenido no se superponga con el NavBar
  };

  const searchBarStyles = {
    position: 'absolute',
    top: '20px',
    right: '180px',
  };

  // Función de búsqueda (implementa la lógica de búsqueda aquí)
  const handleSearch = (searchTerm) => {
    // Aquí debes implementar la lógica de búsqueda y, en función de los resultados, redirigir o mostrar los proyectos.
    // Por ahora, simplemente mostramos una alerta con el término de búsqueda.
    alert(`Búsqueda: ${searchTerm}`);
  };

  return (
    <div style={containerStyles}>
      <div style={backgroundStyles}>
        <div style={searchBarStyles}>
          {/* Agrega el componente SearchBar en la esquina superior derecha */}
          <SearchBar onSearch={handleSearch} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: '3em' }}>ExpoFinder</h1>
          <h2 style={{ color: '#999', fontSize: '2em' }}>El buscador de proyectos de feria USM</h2>
        </div>
        <NavBar />
      </div>
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




