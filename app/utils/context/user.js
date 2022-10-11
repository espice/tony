import React, { useState, useContext, createContext, useEffect } from 'react';
import axios from '../axios';
const Context = createContext({});

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      if (!user.diagnosisDone) {
        console.log('diagnosis not done');
        return (window.location.href = '/diagnosis');
      }
    }
  }, [user]);

  const logout = async () => {
    const { data } = await axios.post('/auth/logout');
    if (data.success) {
      setUser(null);
      return (window.location.href = '/');
    }
    return setError(data.message);
  };

  const fetchUser = async () => {
    const { data } = await axios.get('/auth/me');
    if (data.success) {
      setUser(data.user);

      if (!data.user.diagnosisDone) {
        console.log('diagnosis not done');
        return (window.location.href = '/diagnosis');
      }
    }

    if (!data.success) {
      if (
        window.location.pathname !== '/' &&
        window.location.pathname !== '/login' &&
        window.location.pathname !== '/register'
      ) {
        window.location.pathname = '/login';
      }
    } else {
      console.log(window.location.pathname);
      if (
        window.location.pathname == '/' ||
        window.location.pathname == '/login' ||
        window.location.pathname == '/register'
      ) {
        // window.location.pathname = "/home";
      }
    }

    setLoading(false);
    setError(data.message);
    return setLoading(false);
  };

  useEffect(() => {
    if (loading == true) {
      fetchUser();
    }
  }, [loading]);

  const updateUser = async () => {
    const { data } = await axios.get('/auth/me');
    if (data.success) {
      setUser(data.user);

      if (!data.user.diagnosisDone) {
        return (window.location.href = '/diagnosis');
      }
    }
    return setError(data.message);
  };

  return (
    <Context.Provider
      value={{ user, setUser, error, loading, logout, updateUser }}
    >
      {children}
    </Context.Provider>
  );
}

const useUserContext = () => useContext(Context);

export { UserProvider, useUserContext, Context };
