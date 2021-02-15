import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NotFound from './comps/pages/NotFound';
import Home from './comps/pages/Home';
import MainDashboard from './comps/pages/MainDashboard';

function App() {
  return (
      <main>
        <ul>
          <li><Link to="/" exact="true">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>

        <hr/>  

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/dashboard">
          <MainDashboard/>
        </Route> 
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </main>
  )
}

export default App;