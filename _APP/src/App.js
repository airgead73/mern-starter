import React from 'react';
import { Link, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import projects from './data/projects';
import NotFound from './comps/pages/NotFound';

function Home () {
  return <h1>HOME</h1>
}

function Task () {
  const { projectID, taskID } = useParams();
  console.log(`project: ${projectID}, task: ${taskID}`);
  const task = projects.find(({ id }) => id === projectID).tasks.find(({ id }) => id === taskID);
  console.log(task);
  return <h3>Task {task.title}</h3>
}

function Chapter () {
  const { projectID, chapterID } = useParams();
  console.log(`project: ${projectID}, chapter: ${chapterID}`);
  const chapter = projects.find(({ id }) => id === projectID).chapters.find(({ id }) => id === chapterID);
  console.log(chapter);
  return <h3>Chapter {chapter.number}: {chapter.title}</h3>
}

function Project () {

  const { projectID } = useParams();
  const { path, url } = useRouteMatch();

  const project = projects.find(({ id }) => id === projectID)

  return (

    <React.Fragment>
    <article>
      <h2>{project.code} <small>({project.client})</small></h2>
      <h3>{project.title}</h3>
      <p>by {project.author}</p>

      <ul>
        {project.chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link to={`${url}/chapters/${chapter.id}`}>Ch {chapter.number} {chapter.title}</Link>
          </li>
        ))}
      </ul>

      <ul>
        {project.tasks.map((task) => (
          <li key={task.id}>
            <Link to={`${url}/tasks/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>      

    </article>

    <hr/>

    <Route path={`${path}/chapters/:chapterID`}>
      <Chapter/>
    </Route>
    <Route path={`${path}/tasks/:taskID`}>
      <Task/>
    </Route>    
    </React.Fragment>



  )
}

function Projects () { 

  const { path, url } = useRouteMatch();

  return (
    <React.Fragment>
      <h1>Projects</h1>
      <ul>
        {projects.map(({ id, title, code }) => (
          <li key={id}><Link to={`${url}/${id}`}>{ code } { title }</Link></li>
        ))}
      </ul>

      <hr/>

      <Route path={`${path}/:projectID`}>
        <Project/>
      </Route>


    </React.Fragment>
  )
}


function App() {
  return (
      <main>
        <ul>
          <li><Link to="/" exact="true">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>

        <hr/>  

      <Switch>
      <Route exact path="/">
          <Home/>
          </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>


    
          
    </main>
  )
}

export default App;