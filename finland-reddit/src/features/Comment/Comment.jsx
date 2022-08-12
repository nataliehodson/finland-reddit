import React from "react";
import './Comment.css';

const Comment = (props) => {
    const { comment } = props;
    return (
        <div className="comment">
            <div className="comment-metadata">
                <h3>{comment.author}</h3>
                <p>{comment.created}</p>
                <p>{comment.body}</p>
            </div>

        </div>
    )
}

export default Comment;