import React from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext'

const Home = () => {  

  const authContext = React.useContext(AuthContext);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {

    console.log('handlesubmit')

    e.preventDefault();

    const credentials = {
      email,
      password
    }

    fetch('/api/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
    })
    .then((response) => {
      if(!response.ok) {
        throw Error('Could not fetch data for that resource.')
      }
      return response.json()
    })
    .then((data) => {
      console.log(data);
      authContext.setAuthState(data);
    })
    .catch((err) => {
      console.error(err);
    });

  }

  return ( 
    <React.Fragment>
      {authContext.isAuthenticated() && <Redirect to="/application"/>}
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend>sign in</legend>
          <label htmlFor="email">email</label>
          <input 
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            autoComplete="false"           
          />
          <label htmlFor="password">password</label>
          <input 
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}            
            name="password"
            id="password"
            autoComplete="false"
          />   
          <button type="submit">sign in</button>       
        </fieldset>
      </form>
    </React.Fragment>
    
   );
}
 
export default Home;