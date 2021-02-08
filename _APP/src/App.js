import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProjectForm from './components/ProjectForm';
import ProjectDetail from './components/ProjectDetail';

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

        
                 
      </Switch>      
    </Router>
  )
}

export default App;