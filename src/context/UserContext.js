import React from 'react';
import { useNavigate } from 'react-router-dom';

import { TOKE_POST, USER_GET, TOKEN_VALIDATE_POST } from '../services/api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  const userLogout = React.useCallback (async () =>{
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(null);

    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  async function getUser(token) {
    const { url, options } = USER_GET(token);

    const response = await fetch(url, options);
    const json = await response.json();
    
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKE_POST({ username, password });
      const response = await fetch(url, options);
      
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      
      const { token } = await response.json();
      window.localStorage.setItem('token', token);

      await getUser(token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');

      if (token) {
        try {
          setError(null);
          setLoading(true);

          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);

          if (!response.ok) throw new Error('Token inválido');

          await getUser(token);
          navigate('/conta');
        } catch (err) {
          userLogout();
        } finally{
          setLoading(false);
        }
      }
    }

    autoLogin();
  }, [navigate, userLogout]);
  
  return (
    <UserContext.Provider value={{
      userLogin,
      userLogout,
      data,
      error,
      loading,
      login
    }}>
      {children}
    </UserContext.Provider>
  );
}