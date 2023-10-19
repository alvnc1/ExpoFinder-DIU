import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importa Routes en lugar de Switch
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Themes from './pages/Themes';
import PastVersions from './pages/PastVersions';

import './styles/styles.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>  {/* Usa Routes en lugar de Switch */}
        <Route path="/" element={<Home />} />  {/* Usa "element" en lugar de "component" */}
        <Route path="/projects" element={<Projects />} />  {/* Usa "element" en lugar de "component" */}
        <Route path="/themes" element={<Themes />} />  {/* Usa "element" en lugar de "component" */}
        <Route path="/past-versions" element={<PastVersions />} />  {/* Usa "element" en lugar de "component" */}
      </Routes>  {/* Usa Routes en lugar de Switch */}
    </Router>
  );
};

export default App;




