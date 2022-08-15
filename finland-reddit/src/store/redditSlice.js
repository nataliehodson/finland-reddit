import { createSlice } from '@reduxjs/toolkit';
import { 
    getFinlandPosts,
    getSuomiPosts,
    getComments,
    searchFinland,
    searchSuomi
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

        //comment actions
        toggleShowingComments(state, action) {
            state.posts[action.payload].commentsVisible = !state.posts[action.payload]
              .commentsVisible;
          },
        
        startGetComments (state, action) {
            state.posts[action.payload].commentsVisible = !state.posts[action.payload]
        .commentsVisible;
            if (!state.posts[action.payload].commentsVisible) {
                return;
            }
            state.posts[action.payload].commentsLoading = true;
            state.posts[action.payload].error = false;
        },
        getCommentsFulfilled (state, action) {
            state.posts[action.payload.index].commentsLoading= false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        getCommentsRejected (state, action) {
            state.posts[action.payload].commentsLoading = false;
            state.posts[action.payload].errorComments = true;
        },
        
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
            commentsLoading: false,
            commentsError: false,
        }));

        dispatch(getPostsFulfilled(postsData))
    } catch (error) {
        dispatch(getPostsRejected())
    }
}

export const fetchComments = (index, permalink) => async (dispatch) => {
   try {
        dispatch(startGetComments(index));
        const comments = await getComments(permalink);

        dispatch(getCommentsFulfilled({index, comments}))
    } catch (error){
       dispatch(getCommentsRejected(index))
    }
}

export const searchPosts = (searchTerm) => async (dispatch) => {
    try {
        dispatch(startGetPosts());

        const finlandPosts = await searchFinland(searchTerm);
        const suomiPosts = await searchSuomi(searchTerm);
        const posts = await finlandPosts.concat(suomiPosts);

        const postsData = posts.map((post) => ({
            ...post,
            commentsVisible: false,
            comments: [],
            commentsLoading: false,
            commentsError: false,
        }));

        dispatch(getPostsFulfilled(postsData))

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
    setSortMethod,
    startGetPosts,
    getPostsFulfilled,
    getPostsRejected,
    toggleShowingComments,
    startGetComments,
    getCommentsFulfilled,
    getCommentsRejected
    } = redditSlice.actions;
//reducer
export default redditSlice.reducer;

