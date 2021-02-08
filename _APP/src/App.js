import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';

function App() {
  return (
    <Router>          
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/project">
          <Project/>
        </Route>                 
      </Switch>      
    </Router>
  )
}

export default App;