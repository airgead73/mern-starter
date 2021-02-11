import React from 'react';
import { useHistory } from 'react-router-dom';

const ProjectForm = () => {

  const [title, setTitle] = React.useState('');
  const [code, setCode] = React.useState('');
  const [client, setClient] = React.useState('');
  const [edition, setEdition] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [notes, setNotes] = React.useState('');
  const [isPending, setIsPending] = React.useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {

    e.preventDefault();

    const project = {
      title,
      code,
      client,
      edition,
      author,
      notes
    }

    setIsPending(true);

    fetch('http://localhost:4000/api/projects', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      history.push('/')
    })    

  }

  return ( 
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>add new project</legend>
        <label htmlFor="title">title</label>
        <input 
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title" 
            id="title"
          />
        <label htmlFor="code">code</label>
        <input 
          type="text"
          required
          value={code}
          onChange={(e) => setCode(e.target.value)}           
          name="code" 
          id="code"
        /> 
        <label htmlFor="client">client</label>
        <select 
          value={client}
          onChange={(e) => setClient(e.target.value)}        
          name="client" 
          id="client"
          >
          <option value="zovio">zovio</option>
          <option value="cengage">cengage</option>
        </select> 
        <label htmlFor="edition">edition</label>
        <input 
          type="number"
          required 
          value={edition}
          onChange={(e) => setEdition(e.target.value)}          
          name="edition" 
          id="edition"
          />   
        <label htmlFor="author">author</label>
        <input 
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}           
          name="author" 
          id="author" 
          placeholder="Lastname, Firstname"
          />  
        <label htmlFor="notes">notes</label> 
        <textarea
          required 
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          name="notes" 
          id="notes"
        >
        </textarea>  
        {isPending ? <button type="submit" disabled>adding project...</button>
        : 
        <button type="submit">add project</button>}

         
      </fieldset>
      
    </form>
   );
}
 
export default ProjectForm;