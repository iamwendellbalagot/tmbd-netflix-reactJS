import React, {useState, useEffect} from 'react';
import './App.css';

import {Route, Switch, Redirect, useHistory} from 'react-router-dom';
import  {useSelector, useDispatch} from 'react-redux';
import {setUser, logout, getUser, setMovies} from './reduxSlices/userSlice';
import {auth, db} from './firebase';

import Home from './container/Home/Home';
import Login from './container/Credentials/Login/Login';
import MyList from './container/MyList/MyList';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const history = useHistory()
  
  useEffect(() => {
      auth.onAuthStateChanged ( userAuth => {
        return (userAuth? (
          dispatch(setUser({
            userUID: userAuth.uid,
            userPhoto: userAuth.photoURL,
            displayName: userAuth.displayName
          }))
        ): dispatch(logout()));
      });
     
  }, []);

  useEffect(() => {
    user && db.collection('movies')
        .onSnapshot( snapshot => {
          let movieList = []
          snapshot.docs.forEach(doc => {
            user.userUID === doc.data().userID && 
              movieList.push(doc.data())
          });
          movieList.length > 0 && 
            dispatch(setMovies(movieList));
        })
  }, [user])

  return (
    <div className="app">
      {/* {user? <Home /> : <Login />} */}
      {/* {user? <MyList /> : <Login />} */}
      <Switch>
        <Route path='/' exact component={user? Home : Login} />
        <Route path='/mylist' exact component={MyList} />
      </Switch>
    </div>
  );
}

export default App;
