import React, { useState, useEffect } from 'react';
import './Row.css';

import axios from '../../axios/axios';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player/youtube';
import Movies from './Movies/Movies';



// {<img src={`${imgURL}${movie.poster_path}`} alt={movie.name}></img>}

function Row({fetchUrl, rowName, isOriginal}) {
    const [movies, setMovies] = useState([]);
    const [playing, setPlaying] = useState('');

    useEffect(() =>{
        axios.get(fetchUrl)
        .then(res =>{
            setMovies(res?.data.results)
            console.log(res.data.results);
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
                   <Movies 
                        movie={movie}
                        playTrailer={playTrailer}
                        isOriginal ={isOriginal}
                    />:null
                ))}
            </div>
            {playing?<ReactPlayer url={playing} width={'100%'} height={500} playing ={true}/>: null}
        </div>
    )
}

export default Row
