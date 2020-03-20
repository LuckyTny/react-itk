import React from 'react';
import style from './MyPosts.module.css'


const MyPosts = () => {
    return(
        
        <div>
          <div className="posts">My posts</div>
          <div>New Post Form</div>
          <div className={style.item}>Post 1</div>
          <div className={style.item}>Post 2</div>
          <div className={style.item}>Post 3</div>
        </div>
    
    )
}

export default MyPosts;