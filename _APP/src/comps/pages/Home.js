import React from 'react';
import ProjectList from './ProjectList';
import useGet from '../hooks/useGet';

const Home = () => {

  const { data: projects, isLoading, error } = useGet('/api/projects');

  return ( 
    <React.Fragment>
      <h1>Home page</h1>
        {error && <p>{ error }</p>}
        {isLoading && <p>Loading...</p>}
        {projects && <ProjectList title="All Projects" projects={projects}/>}
        {/* <ProjectList title="Cenage Projects" projects={projects.filter((project) => project.client === "cengage")} handleDelete={handleDelete}/> */}
    </React.Fragment>
    
   );
}
 
export default Home;