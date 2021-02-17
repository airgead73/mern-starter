import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import useGet from '../../../hooks/useGet';
import projects from './../../../data/projects';
import Detail from './Detail';

const Dashboard = () => {

  const { path, url } = useRouteMatch();
  const { data: projects, isLoading, error } = useGet('/api/projects')

  return ( 
    <React.Fragment>
      <h2>Projects</h2>
      {isLoading && <p>loading...</p>}
      {projects && projects.map(({ _id: id, title, code, author }) => (
        <li key={id}>          
          <Link to={{
            pathname: `${url}/${id}`,
            state: {
              id,
              title,
              code,
              author 
            }
          }}>
            {code} {title}
          </Link>
        </li>
      ))}

      <hr/>

      <Route path={`${path}/:projectID`}>
        <Detail/>
      </Route>
      
    </React.Fragment>
   );
}

export default Dashboard;