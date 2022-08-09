import './Post.css'

const Post = (props) => {
    const {post} = props;
    const correctDate = new Date(post.created*1000)
    const dateString = correctDate.toLocaleDateString();
    return (
        <div key={post.id} className="post">
            <div className="sidebar">
                <p>{dateString}</p>
                <p>{post.subreddit_name_prefixed}</p>
                <p>{post.author}</p>
                <div className="upvote-div">
                    <svg className="icon"></svg>
                    <p>{post.ups}</p>
                </div>
            </div>
            <div className="post-whole">
                <h2>{post.title}</h2>
                <img className="post-img" src={post.url}/>
                <div className="post-footer">
                    <svg className="icon"></svg>
                </div>
            </div>
        </div>
    )
}

export default Post;