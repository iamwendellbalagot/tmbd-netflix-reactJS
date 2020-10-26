const API_KEY = 'b7f5d95edea9ef54b7fb82a119352573';


const requests = {
    urlTrending: `/trending/all/day?api_key=${API_KEY}`,
    urlOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
    urlTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    urlActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    urlComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    urlHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    urlRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    urlDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;