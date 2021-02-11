import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return ( 
    <React.Fragment>
      <h2>Sorry</h2>
      <p>That page can't be found.</p>
      <Link to='/'>Back to home page...</Link>
    </React.Fragment>
   );
}
 
export default NotFound;