import { createSlice } from '@reduxjs/toolkit';
import { 
    getFinlandPostsHot,
    getFinlandPostsNew,
    getFinlandPostsTop, 
    getSuomiPostsHot,
    getSuomiPostsNew,
    getSuomiPostsTop 
    } from '../api/Reddit';

export const redditSlice = createSlice({
    name: 'redditPosts',
    initialState: {
        posts: [],
        searchTerm: '',
        isLoading: false,
        error: false
    },
    reducers: {
        setPosts (state, action) {
            state.posts = action.payload;
        },
        startGetPosts (state) {
            state.isLoading = true;
            state.error = false;
        },
        getPostsRejected (state) {
            state.isLoading = false;
            state.error = true;
        },
        getPostsFulfilled (state, action) {
            state.isLoading = false;
            state.error = false;
            state.posts = action.payload;
        },

        toggleCommentsVisible (state, action) {
            state.posts[action.payload].commentsVisible = !state.posts[action.payload]
                .commentsVisible;
        }
        
    }
})



//Thunk to get posts
export const fetchPosts = () => async (dispatch) => {
    try {
        dispatch(startGetPosts());

        //Concatenate results of 'Finland' and 'Suomi' searches
        const finlandPostsHot = await getFinlandPostsHot();
        const finlandPostsTop = await getFinlandPostsTop();
        const finlandPostsNew = await getFinlandPostsNew();
        const suomiPostsHot = await getSuomiPostsHot();
        const suomiPostsTop = await getSuomiPostsTop();
        const suomiPostsNew = await getSuomiPostsNew();
        const postsHot = await finlandPostsHot.concat(suomiPostsHot);
        const postsTop = await finlandPostsTop.concat(suomiPostsTop);
        const postsNew = await finlandPostsNew.concat(suomiPostsNew);

        const postsData = postsHot.map((post) => ({
            ...post,
            commentsVisible: false,
            comments: [],
        }));
        
        dispatch(getPostsFulfilled(postsData));
    } catch (error) {
        dispatch(getPostsRejected())
    }
}


//selector
export const selectPosts = (state) => state.redditSlice.posts;
//action creators
export const { 
    setPosts,
    startGetPosts,
    getPostsFulfilled,
    getPostsRejected,
    toggleCommentsVisible,
    } = redditSlice.actions;
//reducer
export default redditSlice.reducer;

