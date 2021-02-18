import React from 'react';
import { AuthContext } from './../contexts/AuthContext';

const User = () => {

  const auth = React.useContext(AuthContext);
  const { authState } = auth;

  if(isAuthenticated()) {
    return (
      <div>
        <p>{authState.userInfo.firstName} {authState.userInfo.lastName}</p>
        {/* <p><button onClick={() => logout()}>logout</button></p> */}
      </div>
    )
  } else {
    return (
      <div>
        <p>No user is logged in.</p>
      </div>
    )
  }

}
 
export default User;