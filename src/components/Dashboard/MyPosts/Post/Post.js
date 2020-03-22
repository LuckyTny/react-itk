import React from 'react';
import style from './Post.module.css'


const Post = (props) => {
    return(
      <div className={style.item}>
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz9kO7s_vK5PdKAOENk3RPfg4tDts8IO4UfumnRmJh90fK0QWF"></img>
        
        {props.message}
        <br></br>
        <span>like {props.likes}</span>
      </div>
      
    )
}

export default Post;