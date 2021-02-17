import React from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useGet = (url) => {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const authContext = React.useContext(AuthContext);

  React.useEffect(() => {

    const abortConstant = new AbortController();

    setTimeout(() => {
      fetch(url, { 
        method: 'GET',
        signal: abortConstant.signal,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authContext.authState.token}`
        }
      })
        .then(response => {
          if(!response.ok) {
            throw Error('Could not fetch data for that resource.')
          }
          console.log(response)
          return response.json()
        })
        .then((data) => {
          setData(data.results);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setError(err.message);
            setIsLoading(false);
          }

        })
    }, 1000);

    return () => abortConstant.abort();

  },[url]);  

  return { data, isLoading, error }

}

export default useGet;