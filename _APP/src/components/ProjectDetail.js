import React from 'react';
import { useParams } from 'react-router';
import useFetch from './useFetch';

const ProjectDetail = () => {

  const { projectID } = useParams();
  const { data: project, error, isPending } = useFetch(`http://localhost:4000/api/projects/${projectID}`);
  console.log(project)

  return ( 
    <React.Fragment>
      <h2>{project.title} <small>by {project.author}</small></h2>
      <p>{project.title}</p>

    </React.Fragment>
   );
}
 
export default ProjectDetail;