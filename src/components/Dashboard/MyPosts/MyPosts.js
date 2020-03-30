import React from 'react';
import style from './MyPosts.module.css'

import Post from './Post/Post'

let postsData = [
  {id: 1, post: 'Whats UP!?     @#$%', likesCount: 24},
  {id: 2, post: 'Thats my first post here...', likesCount: 22},
]
const MyPosts = () => {
    return(
        
        <div className={style.postBlock}>
          <div className="posts"><h3>My posts</h3></div>
          <div>
            <div><textarea></textarea></div>
            
            <div><button>Add Post</button></div>
            
          </div>
          <Post message={postsData[0].post} likes={postsData[0].likesCount} />
          <Post message={postsData[1].post} likes={postsData[1].likesCount} />
        </div>
    
    )
}

export default MyPosts;