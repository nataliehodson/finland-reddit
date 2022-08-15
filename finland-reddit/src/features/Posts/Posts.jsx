import React, { useEffect } from "react";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, fetchPosts, fetchComments } from "../../store/redditSlice";
import './Posts.css';


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
        <div className="post-container">
            {posts?.map((post, index) => (
                <Post 
                    key={post.id}
                    post={post}
                    onToggleComments={onToggleComments(index)}
                />
            ))}
        </div>
         
    
    )
}

export default Posts;