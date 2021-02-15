import React from 'react';

const Home = () => {  

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPending, setIsPending] = React.useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    const credentials = {
      email,
      password
    }

    console.log(credentials)

  }

  return ( 
    <React.Fragment>
      <form onSubmit={handleSubmit}>
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