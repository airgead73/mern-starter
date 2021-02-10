import React from 'react';

const ProjectForm = () => {
  return ( 
    <form action="">
      <fieldset>
        <legend>add new project</legend>
        <label htmlFor="title">title</label>
        <input type="text" name="title" id="title"/>
        <label htmlFor="code">code</label>
        <input type="text" name="code" id="code"/> 
        <label htmlFor="client">client</label>
        <select name="client" id="client">
          <option value="zovio">zovio</option>
          <option value="cengage">cengage</option>
        </select> 
        <label htmlFor="edition">edition</label>
        <input type="number" name="edition" id="edition"/>   
        <label htmlFor="author">author</label>
        <input type="text" name="author" id="author" placeholder="Lastname, Firstname"/>  
        <label htmlFor="notes">notes</label> 
        <textarea name="notes" id="notes"></textarea>                  
      </fieldset>
      
    </form>
   );
}
 
export default ProjectForm;