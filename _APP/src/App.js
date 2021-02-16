import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NotFound from './comps/pages/NotFound';
import Home from './comps/pages/Home';
import MainDashboard from './comps/pages/MainDashboard';

function generateId() {
  return '_' + Math.random().toString(36).substr(2,9);
}

function App() {

  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');

  const handleSubmit = () => {
    setTodos((todos) => todos.concat({
      text: input,
      id: generateId()
    }));
    setInput('')
  }

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id))
  }


  return (
    <div>
      <input 
        type="text"
        value={input}
        placeholder='New todo'
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>add</button>

      <ul>
        {todos.map(({ text, id }) => (

          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>x</button>            
          </li>

        ))}
      </ul>

    </div>
  )
}

export default App;