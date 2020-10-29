import React, { useEffect, useState } from 'react';
import './Banner.css';

import requests from '../../../request/request';
import axios from '../../../axios/axios';

import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';

function Banner() {
    const [bannerFeatured, setBannerFeatured] = useState(null);
    const [playing, setPlaying] = useState('');
    let playStop = 'Play'

    if (playing){
        playStop = 'Stop';
    }else playStop = 'Play';
    
    useEffect(() =>{
        axios.get(requests.urlTrending)
        .then(res =>{
            console.log(res)
            const randomNum = Math.floor(Math.random() * res.data.results.length) + 1;
            setBannerFeatured(res.data.results[randomNum])
            
        })
    }, [])


    const playTrailer = (title) => {
        movieTrailer(title)
        .then(res =>{
            playing?setPlaying(''):setPlaying(<ReactPlayer url={res} width={'100%'} height={500} playing={true} />)
        })
        .catch(err => console.log(err))
    }

    const truncate = (str, n) =>{
        return (str?.length> n)? str.substr(0, n-1) + '...' : str
    }

    return (
        <React.Fragment>
            <div className = 'banner'
                style = {{
                    backgroundImage: `url('https://image.tmdb.org/t/p/original${bannerFeatured?.backdrop_path}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                }}>
                <div className='banner__contents'>
                    <h1>{bannerFeatured?.name || bannerFeatured?.title || bannerFeatured?.original_title}</h1>
                    <div className='banner__buttons'>
                        <button onClick = {() => playTrailer(bannerFeatured?.name || bannerFeatured?.title || bannerFeatured?.original_title)}>{playStop}</button>
                        <button>My List</button>
                    </div>
                    <p>{truncate(bannerFeatured?.overview, 200)}</p>
                </div>
                <div className='banner--fadeBottom '></div>
            </div>
            {playing}
        </React.Fragment>
        
    )
}

export default Banner;
