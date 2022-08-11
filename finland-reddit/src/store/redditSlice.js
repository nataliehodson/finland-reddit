import { createSlice } from '@reduxjs/toolkit';
import { 
    getFinlandPosts,
    getSuomiPosts,
    } from '../api/Reddit';

export const redditSlice = createSlice({
    name: 'redditPosts',
    initialState: {
        posts: [],
        searchTerm: '',
        isLoading: false,
        error: false,
        sortMethod: 'hot',
    },
    reducers: {
        setPosts (state, action) {
            state.posts = action.payload;
        },

        setSortMethod (state, action){
            state.sortMethod = action.payload;
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
export const fetchPosts = (sortMethod) => async (dispatch) => {
    try {
        dispatch(startGetPosts());

        //Concatenate results of 'Finland' and 'Suomi' searches
        const finlandPosts = await getFinlandPosts(sortMethod);
        const suomiPosts = await getSuomiPosts(sortMethod);
        const posts = await finlandPosts.concat(suomiPosts);

        const postsData = posts.map((post) => ({
            ...post,
            commentsVisible: false,
            comments: [],
        }));
        
        dispatch(getPostsFulfilled(postsData));
    } catch (error) {
        dispatch(getPostsRejected())
    }
}



//selectors
export const selectPosts = (state) => state.redditSlice.posts;
export const selectSortMethod = (state) => state.redditSlice.sortMethod;
//action creators
export const { 
    setPosts,
    startGetPosts,
    getPostsFulfilled,
    getPostsRejected,
    toggleCommentsVisible,
    setSortMethod
    } = redditSlice.actions;
//reducer
export default redditSlice.reducer;

