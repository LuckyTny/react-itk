import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
  let postElements = props.posts.map( p => <Post message={p.post} likes={p.likesCount} /> );
  
    return(

      
        
      <div className={style.postBlock}>
        <div className="posts"><h3>My posts</h3></div>
        <div>
          <div><textarea></textarea></div>
          <div><button>Add Post</button></div>
      </div>
        { postElements }
      </div>
    
    )
}

export default MyPosts;