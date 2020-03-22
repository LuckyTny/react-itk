import React from 'react';
import style from './MyPosts.module.css'

import Post from './Post/Post'


const MyPosts = () => {
    return(
        
        <div>
          <div className="posts">My posts</div>
          <div>
            <textarea></textarea>
            <button>Add Post</button>
          </div>
          <Post message="Hey Whats up in it." likes="2423" />
          <Post message='Thats my first post here' likes="1045" />
        </div>
    
    )
}

export default MyPosts;