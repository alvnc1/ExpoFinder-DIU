import React from 'react';

const ThemeList = () => {
  // Supongamos que tienes una lista de temas
  const themes = [
    { id: 1, name: 'Tema 1' },
    { id: 2, name: 'Tema 2' },
    // ...
  ];

  return (
    <div>
      <h2>Temas</h2>
      <ul>
        {themes.map(theme => (
          <li key={theme.id}>{theme.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeList;

