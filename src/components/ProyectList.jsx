import React from 'react';

const ProjectList = () => {
  // Fetch and display a list of projects
  const projects = []; // Fetch projects from API or database

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
