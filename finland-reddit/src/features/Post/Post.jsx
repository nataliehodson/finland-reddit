import { getFinlandPosts } from "../../api/Reddit";
import { getSuomiPosts } from "../../api/Reddit";

const Post = () => {
    return (
        <div className="post">
            <div className="sidebar">
                <p>time posted</p>
                <p>subreddit</p>
                <p>username</p>
                <div className="upvote-div">
                    <svg className="icon"></svg>
                    <p>nbr upvotes</p>
                </div>
            </div>
            <div className="post-whole">
                <h2>Post title</h2>
                <img className="post-img" />
                <div className="post-footer">
                    <svg></svg>
                </div>
            </div>
        </div>
    )
}

export default Post;