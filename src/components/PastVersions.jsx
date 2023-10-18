import React from 'react';

const PastVersions = () => {
  // Fetch and display a list of past versions
  const pastVersions = []; // Fetch past versions from API or database

  return (
    <div>
      <h2>Past Versions</h2>
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

