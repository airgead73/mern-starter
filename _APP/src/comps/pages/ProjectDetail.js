import React from 'react';
import { useHistory, useParams } from 'react-router';
import useGet from '../hooks/useGet';

const ProjectDetail = () => {

  const { id } = useParams();
  const { data: project, error, isLoading } = useGet(`/api/projects/${id}`);
  const history = useHistory();

  const handleClick = () => {

    fetch(`/api/projects/${id}`, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })

  }

  return ( 
    <React.Fragment>
      {error && <p>{ error }</p>}
      {isLoading && <p>Loading...</p>}
      {project && (
        <React.Fragment>
          <h2>{project.title} <small>by {project.author}</small></h2>
          <p>{project.title}</p>
          <button onClick={handleClick}>delete</button>
        </React.Fragment>
      )}
    </React.Fragment>
   );
}
 
export default ProjectDetail;