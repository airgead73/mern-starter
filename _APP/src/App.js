import React from 'react';
import { Link, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import { Dashboard as Tasks} from './comps/pages/Tasks'
import NotFound from './comps/pages/NotFound';
import Home from './comps/pages/Home';

function App() {
  return (
      <main>
        <ul>
          <li><Link to="/" exact="true">Home</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
        </ul>

        <hr/>  

      <Switch>
      <Route exact path="/">
          <Home/>
          </Route>
        <Route path="/tasks">
          <Tasks/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </main>
  )
}

export default App;