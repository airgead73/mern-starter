import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './comps/pages/Home';
import Navbar from './comps/layout/Navbar';
import ProjectForm from './comps/pages/ProjectForm';
import ProjectDetail from './comps/pages/ProjectDetail';
import NotFound from './comps/pages/NotFound';

function App() {
  return (
    <Router>          
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
       
        <Route exact path="/create">
          <ProjectForm/>
        </Route>  

        <Route path="/projects/:id">
        <ProjectDetail/>
        </Route> 
        <Route path="*">
          <NotFound/>
          </Route>             

        
                 
      </Switch>      
    </Router>
  )
}

export default App;