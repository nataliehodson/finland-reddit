import Post from "../Post/Post";
import './Body.css'

const Body = () => {
    return (
        <div className="post-container">
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Body;