import React from "react";
import Post from "./Post";


const Posts = (props) => {
    const {posts} = props;


    return (
        <>
            {posts?.map((post, index) => (
                <Post 
                    key={post.id}
                    post={post}
                />
            ))}
        </>
         
    )
}

export default Posts;