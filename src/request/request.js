const API_KEY = 'b7f5d95edea9ef54b7fb82a119352573';


const requests = {
    urlTrending: `/trending/all/day?api_key=${API_KEY}`,
    urlOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    urlTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    urlActionMovies: `/discover/movie?api_key=${API_KEY}&with_networks=28`,
    urlComedy: `/discover/movie?api_key=${API_KEY}&with_networks=35`,
    urlHorror: `/discover/movie?api_key=${API_KEY}&with_networks=27`,
    urlRomance: `/discover/movie?api_key=${API_KEY}&with_networks=10749`,
    urlDocumentaries: `/discover/movie?api_key=${API_KEY}&with_networks=99`
}

export default requests;