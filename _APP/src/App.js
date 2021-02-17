import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NotFound from './comps/pages/NotFound';
import Home from './comps/pages/Home';
import MainDashboard from './comps/pages/MainDashboard';
import {AuthProvider} from './contexts/AuthContext';
import User from './comps/User';

function App() {
  return (
    <AuthProvider>
      <main>
        <ul>
          <li><Link to="/" exact="true">Home</Link></li>
          <li><Link to="/application">Dashboard</Link></li>
          <li>
            <User/>
          </li>
        </ul>

        <hr/>  

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/application">
          <MainDashboard/>
        </Route> 
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </main>
    </AuthProvider>

  )
}

export default App;