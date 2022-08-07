import { createSlice } from '@reduxjs/toolkit';
import { getFinlandPosts } from '../api/reddit';
import { getSuomiPosts } from '../api/reddit';

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState: {
        posts: [],
        searchTerm: ''
    },
    reducers: {
        setPosts (state, action) {
            state.posts = action.payload;
        },
        toggleCommentsVisible (state, action) {
            state.posts[action.payload].commentsVisible = !state.posts[action.payload]
                .commentsVisible;
        },
        
    }
})


export const { setPosts, toggleCommentsVisible } = redditSlice.actions;
export default redditSlice.reducer;