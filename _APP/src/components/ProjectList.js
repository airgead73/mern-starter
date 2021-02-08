import React from 'react';

const ProjectList = ({ projects, title }) => {
  return ( 
    <React.Fragment>
      <h2>{title}</h2>
      {projects.map((project) => (
        <article className="project-preview" key={project._id}>
          <h3>{ project.title }</h3>
          <p>written by { project.author }</p>
          
        </article>
      ))}
    </React.Fragment>
   );
}
 
export default ProjectList;