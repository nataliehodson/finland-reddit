import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Comment from '../Comment/Comment';
import { MdModeComment } from 'react-icons/md';
import { FaArrowUp } from 'react-icons/fa';
import { useDispatch } from 'react-redux/es/exports';
import './Post.css';


const Post = (props) => {
    const { post, onToggleComments } = props;
    const correctDate = new Date(post.created*1000)
    const dateString = correctDate.toLocaleDateString();
    const dispatch = useDispatch()

    const showMediaType = () => {
      if(post.post_hint === 'image') {
        return (
          <>
            <img className='post-img' src={post.url}/>
          </>
        )
      } else if(post.post_hint === 'hosted:video') {
        return (
          <>
            <video className='post-video' controls>
              <source src={post.secure_media.reddit_video.fallback_url} />
              Your browser does not support the video tag.
            </video>
          </>
        )
      } else if (post.secure_media === null){
        
        if(post.post_hint === 'link'){
          return (
            <>
              <a href={post.url} target='_blank'>Read more</a>
            </>
          )
          
        } else {
          if (post.selftext.length > 2000) {
            return (
              <>
                <p className='long-post-text'>{post.selftext}</p>
              </>
            )
          } else {
            return (
              <>
                <p className='post-text'>{post.selftext}</p>
              </>
            )
          }
        }
      }
    }


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
                    <p className='post-date'>{dateString}</p>
                    <h3>{post.author}</h3>
                    <p>{post.subreddit_name_prefixed}</p>
                    <div className="upvote-div">
                        <FaArrowUp className='upvote-icon' />
                        <p>{post.ups}</p>
                    </div>
                </div>
                <div className="post-whole">
                    <h2>{post.title}</h2>
                    <div className='imgContainer'>
                      {showMediaType()}
                    </div>
                    <div className="post-footer">
                      <div className='comment-icon'>
                          <MdModeComment 
                            className={`icon ${post.commentsVisible && 'comments-showing'}`}
                            onClick={()=> onToggleComments(post.permalink)}
                          />
                      </div>
                        
                        {renderComments()}
                        
                    </div>
                </div>
            </div>
        </>
       
        
    )
}

export default Post;