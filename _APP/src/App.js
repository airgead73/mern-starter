import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import projects from './data/projects';

function Home () {
  return <h1>HOME</h1>
}

function Project () {
  return <h2>Project</h2>
}

function Projects () {

  const { url, path } = useRouteMatch();

  return (
    <React.Fragment>
      <h1>Projects</h1>
      <ul>
        {projects.map(({ title, code, id }) => (
          <li key={id}><Link to={`/${url}/${id}`}>{code} {title}</Link></li>
        ))}
      </ul>

      <hr/>

      <Route path={`/${path}/:projectID`}>
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

<Switch>
                                                        <Route path="/projects">
                                                              <Projects/>
                                                            </Route>
                                                        </Switch>
    <Route exact path="/">
      <Home/>
    </Route> 

       
    </main>




  )
}

export default App;