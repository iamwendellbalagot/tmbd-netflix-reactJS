import React, { useEffect, useState } from 'react';
import './Banner.css';

import requests from '../../../request/request';
import axios from '../../../axios/axios';

function Banner() {
    const [bannerFeatured, setBannerFeatured] = useState(null);
    useEffect(() =>{
        axios.get(requests.urlTrending)
        .then(res =>{
            console.log(res)
            const randomNum = Math.floor(Math.random() * res.data.results.length) + 1;
            setBannerFeatured(res.data.results[randomNum])
        })
    }, [])

    const truncate = (str, n) =>{
        return (str?.length> n)? str.substr(0, n-1) + '...' : str
    }

    return (
        <div className = 'banner'
            style = {{
                backgroundImage: `url('https://image.tmdb.org/t/p/original${bannerFeatured?.backdrop_path}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}>
            <div className='banner__contents'>
                <h1>{bannerFeatured?.name || bannerFeatured?.title || bannerFeatured?.original_title}</h1>
                <div className='banner__buttons'>
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p>{truncate(bannerFeatured?.overview, 200)}</p>
            </div>
            <div className='banner--fadeBottom '></div>
        </div>
    )
}

export default Banner;
