import React from 'react'
import './Home.css'

import requests from '../../request/request';
import Row from '../../components/Row/Row';


function Home() {
    return (
        <div className = 'home'>
            <div className = 'home__body'>
                <Row fetchUrl={requests.urlOriginals} rowName={'Netflix Originals'} isOriginal />
                <Row fetchUrl={requests.urlTrending} rowName={'Trending'} />
                <Row fetchUrl={requests.urlTopRated} rowName={'Top rated'} />
                <Row fetchUrl={requests.urlComedy} rowName={'Comedy'} />
                <Row fetchUrl={requests.urlActionMovies} rowName={'Action'} />
                <Row fetchUrl={requests.urlRomance} rowName={'Romance'} />
                <Row fetchUrl={requests.urlHorror} rowName={'Horror'} />
                <Row fetchUrl={requests.urlDocumentaries} rowName={'Documentary'} />
            </div>
            
        </div>
    )
}

export default Home
