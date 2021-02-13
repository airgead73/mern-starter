import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects, title }) => {
  return ( 
    <React.Fragment>
      <h2>{title}</h2>
      {projects.map((project) => (

        <article className="project-preview" key={project._id}>
          <Link to={`/projects/${project._id}`}>
          <h3>{ project.title }</h3>
          <p>written by { project.author }</p>
        </Link>          
        </article>
      ))}
    </React.Fragment>
   );
}
 
export default ProjectList;