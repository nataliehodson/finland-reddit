import { combineReducers, configureStore } from '@reduxjs/toolkit';
import redditSliceReducer from './redditSlice';

export default configureStore({
    reducer: combineReducers({
        redditSlice: redditSliceReducer,
    })
})