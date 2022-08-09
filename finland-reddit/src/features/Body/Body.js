import Posts from '../Post/Posts';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, fetchPosts } from "../../store/redditSlice";
import './Body.css'

const Body = () => {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    })



    return (
        <div className="post-container">
            <Posts posts={posts}/>
        </div>
    )
}

export default Body;