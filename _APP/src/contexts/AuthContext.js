import React from 'react';
import { useHistory } from 'react-router-dom'

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {

  const history = useHistory();
  const userInfo = localStorage.getItem('userInfo');
  const expiresAt = localStorage.getItem('expiresAt');

  const [authState, setAuthState] = React.useState({
    token: null,
    expiresAt,
    userInfo: userInfo ? JSON.parse(userInfo) : {}
  });

  const setAuthInfo = ({ token, userInfo, expiresAt }) => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('expiresAt', expiresAt)
    setAuthState({
      token,
      userInfo,
      expiresAt
    });
    history.push('/')
  }

  const logout = () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    setAuthState({
      token: null,
      userInfo: {},
      expiresAt: null
    });
  }

  const isAdmin = () => {
    return authState.userInfo === 'admin'
  }

  const isAuthenticated = () => {
    // if(!authState.token || !authState.expiresAt) {
    //   return false;
    // }
    return new Date().getTime() / 1000 < authState.expiresAt
  }

  return (
    <Provider
      value={{
        authState,
        setAuthState: authInfo => setAuthInfo(authInfo),
        isAuthenticated,
        isAdmin,
        logout
      }}
    >
      { children }
    </Provider>
  )

}

export { AuthContext, AuthProvider };