import React, {useState} from 'react';
import './Movies.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {useSelector} from 'react-redux';
import { getUser } from '../../../reduxSlices/userSlice';
import Tooltip from '@material-ui/core/Tooltip';
import {db} from '../../../firebase';

const imgURL = 'https://image.tmdb.org/t/p/original';
const Movies = ({movie, playTrailer, isOriginal}) => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const user = useSelector(getUser);

    const handleAddMovie = () => {
        console.log(isOriginal? movie.name : movie.title);
        db.collection('movies')
        .add({
            userID: user.userUID,
            movie: movie 
        })
        .then(res => console.log('SUccesfully Added'))
        .catch(err => console.log(err))
    };

    return (
        <div className='movies'>
            <Tooltip title='Add to list'  >
                <AddCircleIcon  onClick={handleAddMovie} />
            </Tooltip>
            <img 
                src={`${imgURL}${isOriginal?movie?.poster_path: movie?.backdrop_path}`} 
                alt={movie.name} 
                key ={movie.id} 
                className = {`movies__posters ${!isOriginal && 'movies__backdrop'}`}
                onClick = {()=> playTrailer(movie?.name || movie?.title || movie?.original_title)}
            />
            {/* <div>
                <span>Add to list</span>
            </div> */}
        </div>
    )
}

export default Movies
