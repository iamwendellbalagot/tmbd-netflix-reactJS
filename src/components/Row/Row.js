import React, { useState, useEffect } from 'react';
import './Row.css';

import axios from '../../axios/axios';

const imgURL = 'https://image.tmdb.org/t/p/original';

// {<img src={`${imgURL}${movie.poster_path}`} alt={movie.name}></img>}

function Row({fetchUrl, rowName}) {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        axios.get(fetchUrl)
        .then(res =>{
            setMovies(res?.data.results)
        })
        .catch(err => console.log(err))
    }, [fetchUrl]);

    return (
        <div className='row'>
            <h2>{rowName}</h2>
            <div className='row__movies'>
                {movies?.map(movie =>(
                    <img src={`${imgURL}${movie.poster_path}`} alt={movie.name} key ={movie.id}></img>
                ))}
            </div>
        </div>
    )
}

export default Row
