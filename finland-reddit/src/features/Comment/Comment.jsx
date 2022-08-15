import React from "react";
import './Comment.css';

const Comment = (props) => {
    const { comment } = props;
    const correctDate = new Date(comment.created*1000)
    const timeString = correctDate.toLocaleString();

    return (
        <div className="comment">
            <div className="comment-metadata">
                <h3>{comment.author}</h3>
                <p>{timeString}</p>
                <p>{comment.body}</p>
            </div>

        </div>
    )
}

export default Comment;