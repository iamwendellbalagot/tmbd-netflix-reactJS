import React, {useState, useEffect} from 'react';
import './App.css';

import {Route} from 'react-router-dom';
import  {useSelector, useDispatch} from 'react-redux';
import {setUser, logout, getUser} from './reduxSlices/userSlice';
import {auth} from './firebase';

import Home from './container/Home/Home';
import Login from './container/Credentials/Login/Login';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  
  useEffect(() => {
      auth.onAuthStateChanged ( userAuth => {
        return (userAuth? (
          dispatch(setUser({
            userUID: userAuth.uid,
            userPhoto: userAuth.photoURL,
            displayName: userAuth.displayName
          }))
        ): dispatch(logout()));
      })
  }, [user]);

  return (
    <div className="app">
      {user? <Home /> : <Login />}
    </div>
  );
}

export default App;
