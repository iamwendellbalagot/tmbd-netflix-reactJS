import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './reduxSlices/userSlice';

export default configureStore({
    reducer: {
        user: userReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});