import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Comment from '../Comment/Comment';
import { MdModeComment } from 'react-icons/md'
import { useDispatch } from 'react-redux/es/exports';
import './Post.css';


const Post = (props) => {
    const { post, onToggleComments } = props;
    const correctDate = new Date(post.created*1000)
    const dateString = correctDate.toLocaleDateString();
    const dispatch = useDispatch()

    /*if(post.url == 'https://i.redd.it/*') {
        document.getElementById('img').style.display = 'block';
    } else {
        document.getElementById('img').style.display = 'none';
    }*/
    const renderComments = () => {
        if (post.commentsError) {
          return (
            <div>
              <h3>Error loading comments</h3>
            </div>
          );
        }
    
        if (post.commentsLoading) {
          return (
            <div>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          );
        }
    
        if (post.commentsVisible) {
          return (
            <div className='comments-container'>
              {post.comments?.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}
            </div>
          );
        }
    
        return null;
      };

    

    return (
        <>
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
                    <div className='imgContainer' id='img'>
                        <img className="post-img" src={post.url}/>
                    </div>
                    <div className="post-footer">
                        <MdModeComment 
                            className={`icon ${post.commentsVisible && 'comments-showing'}`}
                            onClick={()=> onToggleComments(post.permalink)}
                            />
                        {renderComments()}
                        
                    </div>
                </div>
            </div>
        </>
       
        
    )
}

export default Post;