import React from 'react';
import { useParams } from 'react-router';
import useFetch from './useFetch';

const ProjectDetail = () => {

  const { id } = useParams();
  const { data: project, error, isPending } = useFetch('http://localhost:4000/projects/' + id)

  return ( 
    <React.Fragment>
      <p>project detail {id}</p>
    </React.Fragment>
   );
}
 
export default ProjectDetail;