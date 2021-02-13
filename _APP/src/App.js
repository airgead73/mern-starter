import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import projects from './data/projects';

function Home () {
  return <h1>HOME</h1>
}

function Project () {
  return <h2>Project</h2>
}

function Projects () {
  return (
    <React.Fragment>
      <h1>Projects</h1>
      <ul>
        {projects.map(({ title, code, id }) => (
          <li key={id}><Link to={`/projects/${id}`}>{code} {title}</Link></li>
        ))}
      </ul>

      <hr/>

      <Route path={`/projects/:projectID`}>
        <Project/>
      </Route>
    </React.Fragment>
  )
}


function App() {
  return (
    <main>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="projects">Projects</Link></li>
      </ul>

    <hr/>  

    <Route exact path="/">
      <Home/>
    </Route> 

    <Route path="/projects">
      <Projects/>
    </Route>       
    </main>




  )
}

export default App;