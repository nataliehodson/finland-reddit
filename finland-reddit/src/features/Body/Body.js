import Posts from '../Post/Posts';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, selectComments } from "../../store/redditSlice";
import './Body.css'

const Body = () => {
    

    

   

    return (
        <div className='post-container'>
                <Posts 
                    posts={posts}
                />
        </div>
    )
}

export default Body;