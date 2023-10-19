import React from 'react';

const PastVersions = () => {
  // Supongamos que tienes una lista de versiones pasadas
  const pastVersions = [
    { id: 1, versionNumber: '1.0', description: 'Primera versión' },
    { id: 2, versionNumber: '2.0', description: 'Segunda versión' },
    // ...
  ];

  return (
    <div>
      <h2>Versiones Pasadas</h2>
      <ul>
        {pastVersions.map(version => (
          <li key={version.id}>
            <p>Version: {version.versionNumber}</p>
            <p>Description: {version.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastVersions;
