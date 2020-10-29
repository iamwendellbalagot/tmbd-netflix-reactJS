import React, { useState, useEffect } from 'react';
import './Row.css';

import axios from '../../axios/axios';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player/youtube'

const imgURL = 'https://image.tmdb.org/t/p/original';

// {<img src={`${imgURL}${movie.poster_path}`} alt={movie.name}></img>}

function Row({fetchUrl, rowName, isOriginal}) {
    const [movies, setMovies] = useState([]);
    const [playing, setPlaying] = useState('');

    useEffect(() =>{
        axios.get(fetchUrl)
        .then(res =>{
            setMovies(res?.data.results)
        })
        .catch(err => console.log(err))
    }, [fetchUrl]);

    const playTrailer = (name) =>{
        movieTrailer(name)
        .then(res =>{
            if(res === playing){
                setPlaying('')
            }
            else{
                setPlaying(res)
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='row'>
            <h2>{rowName}</h2>
            <div className='row__movies'>
                {movies?.map(movie =>(
                    movie.poster_path?
                    <img 
                        src={`${imgURL}${isOriginal?movie?.poster_path: movie?.backdrop_path}`} 
                        alt={movie.name} 
                        key ={movie.id} 
                        className = {`row__posters ${!isOriginal && 'row__backdrop'}`}
                        onClick = {()=> playTrailer(movie?.name || movie?.title || movie?.original_title)}
                        />:null
                ))}
            </div>
            {playing?<ReactPlayer url={playing} width={'100%'} height={500} playing ={true}/>: null}
        </div>
    )
}

export default Row
