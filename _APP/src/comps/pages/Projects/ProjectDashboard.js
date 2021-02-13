import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useGet from '../../hooks/useGet';

const ProjectList = ({ projects, url }) => {
  return ( 

    <ul>
      {projects.map((project) => {

        <li key={project.id}><Link to={`/${url}/${project.id}`}>{project.code} {project.title}</Link></li>        

      })}
    </ul>

   );
}

const ProjectDashboard = () => {
  const { path, url } = useRouteMatch();
  const { data: projects, isLoading, error } = useGet('/api/projects')
  return ( 
    <React.Fragment>

      <h2>project dashboard</h2>
      { error && <p>{ error }</p> }
      { isLoading && <p>Loading...</p>}
      { projects && <ProjectList projects={projects} url={url} />}

      <Route path={`${path}/:projectID`}


    </React.Fragment>
    
   );
}
 
export default ProjectDashboard;