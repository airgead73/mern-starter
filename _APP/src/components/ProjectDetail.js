import React from 'react';
import { useParams } from 'react-router';
import useFetch from './useFetch';

const ProjectDetail = () => {

  const { id } = useParams();
  const { data: project, error, isLoading } = useFetch(`http://localhost:4000/api/projects/${id}`);

  return ( 
    <React.Fragment>
      {error && <p>{ error }</p>}
      {isLoading && <p>Loading...</p>}
      {project && (
        <React.Fragment>
          <h2>{project.title} <small>by {project.author}</small></h2>
          <p>{project.title}</p>
        </React.Fragment>
      )}
    </React.Fragment>
   );
}
 
export default ProjectDetail;