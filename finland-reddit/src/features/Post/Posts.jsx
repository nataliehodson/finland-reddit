import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, fetchPosts, fetchComments } from "../../store/redditSlice";


const Posts = () => {
    const reddit = useSelector((state) => state.redditSlice);
    const { sortMethod } = reddit;
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
   
    useEffect(() => {
        dispatch(fetchPosts(sortMethod))
    }, [sortMethod])
    
    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink))
        };

        return getComments;
   }

    return (
        <>
            {posts?.map((post, index) => (
                <Post 
                    key={post.id}
                    post={post}
                    onToggleComments={onToggleComments(index)}
                />
            ))}
        </>
         
    
    )
}

export default Posts;