import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        movies: []
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setMovies: ( state, action ) => {
            state.movies = action.payload;
        },
        logout: (state, action) => {
            state.user = null;
        }
    }
});

export const {setUser, setMovies, logout} = userSlice.actions;
export const getUser = (state) => state.user.user;
export const getMovies = (state) => state.user.movies;
export default userSlice.reducer;