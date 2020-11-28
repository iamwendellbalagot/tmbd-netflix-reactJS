import React, {useEffect} from 'react';
import './MyList.css';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { getUser, getMovies } from '../../reduxSlices/userSlice';
import { db, auth } from '../../firebase';

const imgURL = 'https://image.tmdb.org/t/p/original';

const MyList = () => {
    const user = useSelector(getUser);
    const movies = useSelector(getMovies);

    const history = useHistory()

    const handleLogout = () => {
        auth.signOut()
    }

    // useEffect(() => {
    //     !user && history.replace('/')
    // }, [])

    return (
        <div className = 'mylist'>
            <div className='mylist__header'>
                <span onClick={() => history.push('/')} >Home</span>
                <span onClick={handleLogout} >Logout</span>
            </div>
            <div className="mylist__movies">
                {movies? movies.map(movie => (
                    <img 
                        src={`${imgURL}${movie?.movie.poster_path}`} 
                        alt={movie.movie.title ? movie.movie.title : movie.movie.name} 
                        key ={movie.movie.id} 
                     />
                )) : null}
            </div>
        </div>
    )
}

export default MyList
