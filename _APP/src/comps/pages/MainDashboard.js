import React from 'react';
import { Switch, Route, Link, useRouteMatch, Redirect } from 'react-router-dom';
import { Dashboard as Projects } from './Projects';
import { Dashboard as Tasks } from './Tasks';
import { Dashboard as Milestones } from './Milestones';
import { Dashboard as Diary } from './Diary';
import NotFound from './NotFound';
import { AuthContext } from '../contexts/AuthContext';

const MainDashboard = () => {

  const authContext = React.useContext(AuthContext);

  console.log(authContext.isAuthenticated())

  const { path, url } = useRouteMatch();

  return ( 
    
    <React.Fragment>
      {!authContext.isAuthenticated() && <Redirect to='/'/>}
      <h1>Dashboard</h1>
      <ul>
          <li><Link to={`${url}/projects`}>Projects</Link></li>
          <li><Link to={`${url}/tasks`}>Tasks</Link></li>
          <li><Link to={`${url}/milestones`}>Milestones</Link></li>
          <li><Link to={`${url}/diary`}>Diary</Link></li>
        </ul>

        <hr/> 
    <Switch>
    <Route path={`${path}/projects`}>
        <Projects/>
      </Route>
      <Route path={`${path}/tasks`}>
        <Tasks/>
      </Route>
      <Route path={`${path}/milestones`}>
        <Milestones/>
      </Route> 
      <Route path={`${path}/diary`}>
        <Diary/>
      </Route> 
      <Route path={`${path}/*`}>
          <NotFound/>
        </Route>       
    </Switch>
          
    </React.Fragment>
   );
}
 
export default MainDashboard;