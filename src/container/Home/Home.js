import React, { useState } from 'react'
import './Home.css'

import requests, { movieSearch } from '../../request/request';
import Header from '../../components/Header/Header';
import Row from '../../components/Row/Row';
import Navigation from '../../components/Navigation/Navigation';


function Home() {

    const [searchURL, setSearchURL] = useState('');
    const [searchResults, showSearchResults] = useState(false);

    const handleSearch = (name) =>{
        name = name.split(' ');
        name = name.join('+');
        console.log(name);
        setSearchURL(movieSearch(name));
        showSearchResults(true)
        // axios.get(movieSearch(name))
        // .then(res => {
        //     console.log(res.data.results)
        //     setSearchURL('')
        // })
    }

    return (
        <div className = 'home'>
            <Navigation handleSearch = {handleSearch}/>
            <Header />
            <div className = 'home__body'>
                {searchResults?<Row fetchUrl={searchURL} rowName={'Search Results'} isOriginal />: null}
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

export default Home;
