import React from 'react';

const ProjectList = () => {
  // Supongamos que tienes una lista de proyectos
  const projects = [
    { id: 1, name: 'Proyecto 1' },
    { id: 2, name: 'Proyecto 2' },
    // ...
  ];

  return (
    <div>
      <h2>Proyectos</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

